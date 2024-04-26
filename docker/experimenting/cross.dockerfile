#FROM --platform=linux/amd64 ghcr.io/cross-rs/aarch64-unknown-linux-gnu:latest
FROM --platform=$BUILDPLATFORM ghcr.io/cross-rs/aarch64-unknown-linux-gnu:0.2.4 as builder

ENV RUSTUP_HOME=/tmp/rustup
ENV CARGO_HOME=/tmp/cargo

RUN curl --retry 3 --proto '=https' --tlsv1.2 -sSfL https://sh.rustup.rs -o rustup-init.sh; \
	sh rustup-init.sh -y --no-modify-path; \
    rm rustup-init.sh

RUN PATH="${CARGO_HOME}/bin:${PATH}" rustup target add aarch64-unknown-linux-gnu


WORKDIR /root/caesar
COPY trash .

# Use git CLI to fetch crates (avoid memory issues in QEMU environments)
# see https://github.com/rust-lang/cargo/issues/10583
RUN  PATH="${CARGO_HOME}/bin:${PATH}" printf "[net]\ngit-fetch-with-cli = true" >> "$CARGO_HOME/config.toml"

RUN PATH="${CARGO_HOME}/bin:${PATH}" cargo build --verbose --release --target aarch64-unknown-linux-gnu

RUN cp target/aarch64-unknown-linux-gnu/release/caesar target/release/caesar

# ---- Building the final Docker image ----
FROM gcr.io/distroless/cc-debian12:debug

COPY --from=builder /root/caesar/target/release/caesar /caesar

ENTRYPOINT ["./caesar"]
