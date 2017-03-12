#!/bin/bash

ROOT_DIR="$(cd $(dirname ${BASH_SOURCE:-$0}); pwd)/../"

echo "input environment to build. ex)staging, production"
read ENVRIONMENT
if [ ${ENVRIONMENT} = "staging" ] ; then
  echo "you have selected staging environment"
  PROFILE="mopinfish-dev"
  STAGE="current"
  ECR_REPOSITORY="577717963540.dkr.ecr.ap-northeast-1.amazonaws.com/node-koa"
elif [ ${ENVRIONMENT} = "production" ] ; then
  echo "you have selected live environment"
  PROFILE="mopinfish-prod"
  STAGE="live"
else
  exit
fi

cd ${ROOT_DIR}
# login to ECR
$(aws ecr get-login --profile ${PROFILE} --region ap-northeast-1)

# build Docker image
docker build --build-arg STAGE=${STAGE} -t node-koa .
docker tag node-koa:latest ${ECR_REPOSITORY}
docker push ${ECR_REPOSITORY}
