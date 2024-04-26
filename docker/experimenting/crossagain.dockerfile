# ---- Base builder image from cross with necessary target-specific setup ----
# FIXME: Add --platform=$BUILDPLATFORM to use image for builder platform (currently the cross-rs images are not multi-platform)
FROM --platform=linux/amd64 ghcr.io/cross-rs/aarch64-unknown-linux-gnu:latest AS builder-base-linux-arm64
ENV CAESAR_ARCH="aarch64-unknown-linux-gnu"

# FIXME: Add --platform=$BUILDPLATFORM to use image for builder platform (currently the cross-rs images are not multi-platform)
FROM --platform=linux/amd64 ghcr.io/cross-rs/x86_64-unknown-linux-gnu:latest AS builder-base-linux-amd64
ENV CAESAR_ARCH="x86_64-unknown-linux-gnu"

# ---- Perform build using target-specific builder image ----
FROM --platform=$BUILDPLATFORM builder-base-$TARGETOS-$TARGETARCH as builder

# Manually install rust and toolchain, as it is not present in the cross-rs images
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain stable
ENV CARGO_HOME="/root/.cargo" PATH="/root/.cargo/bin:$PATH"

RUN rustup target add ${CAESAR_ARCH}

# install required dependencies to build z3.rs...
RUN apt-get update && apt-get install -y cmake llvm-dev libclang-dev clang python3

# Use git CLI to fetch crates (avoid memory issues in QEMU environments)
# see https://github.com/rust-lang/cargo/issues/10583
RUN printf "[net]\ngit-fetch-with-cli = true" >> "$CARGO_HOME/config.toml"

WORKDIR /root/caesar
COPY . .

RUN cargo build --verbose --release --target ${CAESAR_ARCH}

RUN cp target/${CAESAR_ARCH}/release/caesar target/release/caesar









### Platform-specific configuration ###
# ---- [amd64] Platform-specific setup for cross-compilation ----
FROM --platform=$BUILDPLATFORM rust-builder AS builder-linux-amd64

ENV CAESAR_ARCH="x86_64-unknown-linux-gnu"

RUN apt-get install -y g++-x86-64-linux-gnu libc-dev-amd64-cross

RUN rustup target add x86_64-unknown-linux-gnu


# ---- [arm64] Platform-specific setup for cross-compilation ----
FROM --platform=$BUILDPLATFORM rust-builder AS builder-linux-arm64 

ENV CAESAR_ARCH="aarch64-unknown-linux-gnu"

RUN apt-get install -y g++-aarch64-linux-gnu libc-dev-arm64-cross

RUN rustup target add aarch64-unknown-linux-gnu

# ---- Building the final Docker image ----
FROM gcr.io/distroless/cc-debian12:debug

COPY --from=builder /root/caesar/target/release/caesar /caesar

ENTRYPOINT ["./caesar"]
