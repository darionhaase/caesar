# ---- Base builder image with rust cross ----
FROM --platform=$BUILDPLATFORM rust:latest AS rust-builder

# set CROSS_CONTAINER_IN_CONTAINER to inform `cross` that it is executed from within a container
ENV CROSS_CONTAINER_IN_CONTAINER=true

# install `cross`
RUN cargo install cross

# install required dependencies to build z3.rs...
RUN apt-get update
RUN apt-get install -y cmake llvm-dev libclang-dev clang

WORKDIR /root/caesar
COPY trash .

# Use git CLI to fetch crates (avoid memory issues in QEMU environments)
# see https://github.com/rust-lang/cargo/issues/10583
RUN printf "[net]\ngit-fetch-with-cli = true" >> "$CARGO_HOME/config.toml"

### Platform-specific configuration ###
# ---- [amd64] Platform-specific setup for cross-compilation ----
FROM --platform=$BUILDPLATFORM rust-builder AS builder-linux-amd64
ENV CAESAR_ARCH="x86_64-unknown-linux-gnu"

# ---- [arm64] Platform-specific setup for cross-compilation ----
FROM --platform=$BUILDPLATFORM rust-builder AS builder-linux-arm64 
ENV CAESAR_ARCH="aarch64-unknown-linux-gnu"

# ---- Perform build using target-specific builder image ----
FROM --platform=$BUILDPLATFORM builder-$TARGETOS-$TARGETARCH as builder

RUN cross build --verbose --release --target ${CAESAR_ARCH}

RUN cp target/${CAESAR_ARCH}/release/caesar target/release/caesar

# ---- Building the final Docker image ----
FROM gcr.io/distroless/cc-debian12:latest

COPY --from=builder /root/caesar/target/release/caesar /caesar

ENTRYPOINT ["./caesar"]
