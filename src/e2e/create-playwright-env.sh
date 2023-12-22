#!/usr/bin/env bash

set -e

SUBSCRIPTION=SysHealthMon-dev
KEY_VAULT_NAME=shmkeyvaultdev

get_keyvault_secret() {
  az keyvault secret show -n "$1" --vault-name $KEY_VAULT_NAME --subscription $SUBSCRIPTION --query value --output tsv
}

E2E_PASSWORD_SECRET_NAME=E2ETestPassword
E2E_PASSWORD_SECRET_NAME_NO_ORG=E2ETestPasswordNoOrg

echo "Fetching E2E settings..."
E2E_USER=axis.azkaban+ci-e2e@gmail.com
E2E_PASSWORD=$(get_keyvault_secret $E2E_PASSWORD_SECRET_NAME)
E2E_USER_NO_ORG=axis.azkaban@gmail.com
E2E_PASSWORD_NO_ORG=$(get_keyvault_secret $E2E_PASSWORD_SECRET_NAME_NO_ORG)

echo "Writing playwright/.env..."
{
  echo "E2E_USER=$E2E_USER"
  echo "E2E_PASSWORD=$E2E_PASSWORD"
  echo "E2E_USER_NO_ORG=$E2E_USER_NO_ORG"
  echo "E2E_PASSWORD_NO_ORG=$E2E_PASSWORD_NO_ORG"
} > .env
