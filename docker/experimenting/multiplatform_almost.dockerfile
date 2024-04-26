
FROM --platform=$TARGETPLATFORM rust:latest as builder
ARG TARGETPLATFORM


# install required dependencies to build z3.rs...
RUN apt-get update && apt-get install -y cmake llvm-dev libclang-dev clang

# Workaround to conditionally set rust target based on the image's TARGETPLATFORM
RUN case ${TARGETPLATFORM} in \
         "linux/amd64") CAESAR_ARCH="x86_64-unknown-linux-gnu"  ;; \
         "linux/arm64") CAESAR_ARCH="aarch64-unknown-linux-gnu"  ;; \
		 *) exit 1 ;; \
    esac; \
	echo $CAESAR_ARCH >> /caesar.target_arch

RUN CAESAR_ARCH=$(cat /caesar.target_arch) && rustup target add ${CAESAR_ARCH} && rustup toolchain install stable-${CAESAR_ARCH}
WORKDIR /root/caesar
COPY minimal .


# Use git CLI to fetch crates (avoid memory issues in QEMU environments)
# see https://github.com/rust-lang/cargo/issues/10583
RUN printf "[net]\ngit-fetch-with-cli = true" >> /root/caesar/test_file


RUN CAESAR_ARCH=$(cat /caesar.target_arch) && cargo build --verbose --release --target ${CAESAR_ARCH}

# ---- Building the final Docker image ----
#FROM gcr.io/distroless/base-nossl-debian12:latest

#COPY --from=builder /root/caesar/test_file /caesar

#ENTRYPOINT ["echo", "./caesar"]
