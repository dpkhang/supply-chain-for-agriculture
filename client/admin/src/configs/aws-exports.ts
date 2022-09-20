/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  aws_project_region: '',
  aws_cognito_identity_pool_id: '',
  aws_cognito_region: '',
  aws_user_pools_id: '',
  aws_user_pools_web_client_id: '',
  oauth: {
    domain: '',
    scope: ['phone', 'email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
    redirectSignIn: 'http://localhost:3000/',
    redirectSignOut: 'http://localhost:3000/dang-nhap/',
    responseType: 'code'
  },
  federationTarget: 'COGNITO_USER_POOLS',
  aws_cognito_username_attributes: ['EMAIL'],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: ['SMS'],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: []
  },
  aws_cognito_verification_mechanisms: ['EMAIL']
}

export default awsmobile
