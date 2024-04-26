# ---- Builder image with the Rust build ----

FROM --platform=linux/x86_64 rust:alpine as builder

RUN apk update

# Add dpendencies for Alpine (musl) build
RUN rustup target add x86_64-unknown-linux-musl
RUN apk add musl-dev

# Static linking for C++ code (musl)
#RUN ln -s "/usr/bin/x86_64-alpine-linux-musl-g++" "/usr/bin/musl-g++"

# install required dependencies to build z3.rs...
#RUN apk add cmake llvm-dev libclang-dev clang
RUN apk add cmake clang llvm clang-dev 
RUN apk add build-base alpine-sdk make git gcc libtool g++
RUN apk add llvm-static llvm-dev clang-static

#RUN rustup target add x86_64-unknown-linux-musl

WORKDIR /root/caesar
COPY . .

# Use git CLI to fetch crates (avoid memory issues in QEMU environments)
# see https://github.com/rust-lang/cargo/issues/10583
RUN printf "[net]\ngit-fetch-with-cli = true" >> "$CARGO_HOME/config.toml"

RUN cargo build --verbose --release --target x86_64-unknown-linux-musl

# ---- Building the final Docker image ----
FROM alpine:latest

#RUN apt-get update && apt-get install -y extra-runtime-dependencies && rm -rf /var/lib/apt/lists/*
#RUN apt-get update && apt-get install -y fish && rm -rf /var/lib/apt/lists/*

COPY --from=builder /root/caesar/target/release/caesar /root/caesar/caesar
RUN ln -s /root/caesar/caesar /usr/local/bin/caesar

# ---- Entry point setup ----
WORKDIR /root/caesar
ENTRYPOINT ["caesar"]
