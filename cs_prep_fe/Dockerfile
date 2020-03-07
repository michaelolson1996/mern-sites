FROM centos:centos7
LABEL maintainer="michaelolson.1996@protonmail.com"

RUN yum makecache \
  && yum update -y \
  && yum install -y \
  wget \
  zip \
  openssh-client \
  unzip \
  node v12.4.0 \
  && yum clean all

