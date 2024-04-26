# ---- Builder image with the Rust build ----
FROM messense/rust-musl-cross:aarch64-musl as builder

RUN apt-get update
RUN apt-get install -y python3

# install required dependencies to build z3.rs...
RUN apt-get update && apt-get install -y cmake llvm-dev libclang-dev clang


#RUN apt-get install -y musl-tools musl-dev

#RUN rustup target add aarch64-unknown-linux-musl

#RUN ln -s /bin/g++ /bin/musl-g++
#aarch64-linux-gnu-g++
WORKDIR /root/caesar
COPY . .

# # Use git CLI to fetch crates (avoid memory issues in QEMU environments)
# # see https://github.com/rust-lang/cargo/issues/10583
RUN printf "[net]\ngit-fetch-with-cli = true" >> "$CARGO_HOME/config.toml"

ENV CARGO_TARGET_AARCH64_UNKNOWN_LINUX_MUSL_LINKER=aarch64-linux-gnu-gcc
ENV CC=aarch64-linux-gnu-gcc
ENV CXX=aarch64-linux-gnu-g++

RUN cargo build --verbose --release --target aarch64-unknown-linux-musl
# RUN CROSS_COMPILE=musl- cargo build --verbose --release --target aarch64-unknown-linux-musl

# # ---- Building the final Docker image ----
# FROM debian:stable-slim

# COPY --from=builder /root/caesar/target/release/caesar /root/caesar/caesar
# RUN ln -s /root/caesar/caesar /usr/local/bin/caesar

# # ---- Entry point setup ----
# WORKDIR /root/caesar
# ENTRYPOINT ["caesar"]
