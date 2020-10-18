const voiceList = [
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "pt-BR_IsabelaV3Voice",
        "customizable": true,
        "description": "Isabela: Brazilian Portuguese (português brasileiro) female voice. Dnn technology.",
        "language": "pt-BR",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/pt-BR_IsabelaV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "de-DE_BirgitV2Voice",
        "customizable": true,
        "description": "Birgit: Standard German (Standarddeutsch) female voice. Dnn technology.",
        "language": "de-DE",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/de-DE_BirgitV2Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "it-IT_FrancescaV3Voice",
        "customizable": true,
        "description": "Francesca: Italian (italiano) female voice. Dnn technology.",
        "language": "it-IT",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/it-IT_FrancescaV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-US_LisaV2Voice",
        "customizable": true,
        "description": "Lisa: American English female voice. Dnn technology.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_LisaV2Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "es-US_SofiaV3Voice",
        "customizable": true,
        "description": "Sofia: North American Spanish (español norteamericano) female voice. Dnn technology.",
        "language": "es-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/es-US_SofiaV3Voice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "de-DE_DieterV2Voice",
        "customizable": true,
        "description": "Dieter: Standard German (Standarddeutsch) male voice. Dnn technology.",
        "language": "de-DE",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/de-DE_DieterV2Voice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-US_KevinV3Voice",
        "customizable": true,
        "description": "Kevin: American English male voice. Dnn technology.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_KevinV3Voice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-US_HenryV3Voice",
        "customizable": true,
        "description": "Henry: American English male voice. Dnn technology.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_HenryV3Voice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-GB_JamesV3Voice",
        "customizable": true,
        "description": "James: British English male voice. Dnn technology.",
        "language": "en-GB",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-GB_JamesV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-GB_CharlotteV3Voice",
        "customizable": true,
        "description": "Charlotte: British English female voice. Dnn technology.",
        "language": "en-GB",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-GB_CharlotteV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "es-LA_SofiaVoice",
        "customizable": true,
        "description": "Sofia: Latin American Spanish (español latinoamericano) female voice.",
        "language": "es-LA",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/es-LA_SofiaVoice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "de-DE_DieterV3Voice",
        "customizable": true,
        "description": "Dieter: Standard German (Standarddeutsch) male voice. Dnn technology.",
        "language": "de-DE",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/de-DE_DieterV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "it-IT_FrancescaV2Voice",
        "customizable": true,
        "description": "Francesca: Italian (italiano) female voice. Dnn technology.",
        "language": "it-IT",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/it-IT_FrancescaV2Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "fr-FR_ReneeV3Voice",
        "customizable": true,
        "description": "Renee: French (français) female voice. Dnn technology.",
        "language": "fr-FR",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/fr-FR_ReneeV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "de-DE_BirgitV3Voice",
        "customizable": true,
        "description": "Birgit: Standard German (Standarddeutsch) female voice. Dnn technology.",
        "language": "de-DE",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/de-DE_BirgitV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "es-ES_LauraV3Voice",
        "customizable": true,
        "description": "Laura: Castilian Spanish (español castellano) female voice. Dnn technology.",
        "language": "es-ES",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/es-ES_LauraV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-US_EmilyV3Voice",
        "customizable": true,
        "description": "Emily: American English female voice. Dnn technology.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_EmilyV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "ja-JP_EmiV3Voice",
        "customizable": true,
        "description": "Emi: Japanese (日本語) female voice. Dnn technology.",
        "language": "ja-JP",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/ja-JP_EmiV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-GB_KateV3Voice",
        "customizable": true,
        "description": "Kate: British English female voice. Dnn technology.",
        "language": "en-GB",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-GB_KateV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-US_AllisonV3Voice",
        "customizable": true,
        "description": "Allison: American English female voice. Dnn technology.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_AllisonV3Voice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "fr-FR_NicolasV3Voice",
        "customizable": true,
        "description": "Nicolas: French (français) male voice. Dnn technology.",
        "language": "fr-FR",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/fr-FR_NicolasV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-US_AllisonV2Voice",
        "customizable": true,
        "description": "Allison: American English female voice. Dnn technology.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_AllisonV2Voice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-US_MichaelV3Voice",
        "customizable": true,
        "description": "Michael: American English male voice. Dnn technology.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_MichaelV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-US_LisaV3Voice",
        "customizable": true,
        "description": "Lisa: American English female voice. Dnn technology.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_LisaV3Voice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "es-ES_EnriqueV3Voice",
        "customizable": true,
        "description": "Enrique: Castilian Spanish (español castellano) male voice. Dnn technology.",
        "language": "es-ES",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/es-ES_EnriqueV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "es-LA_SofiaV3Voice",
        "customizable": true,
        "description": "Sofia: Latin American Spanish (español latinoamericano) female voice. Dnn technology.",
        "language": "es-LA",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/es-LA_SofiaV3Voice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-US_MichaelV2Voice",
        "customizable": true,
        "description": "Michael: American English male voice. Dnn technology.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_MichaelV2Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "pt-BR_IsabelaVoice",
        "customizable": true,
        "description": "Isabela: Brazilian Portuguese (português brasileiro) female voice.",
        "language": "pt-BR",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/pt-BR_IsabelaVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "de-DE_ErikaV3Voice",
        "customizable": true,
        "description": "Erika: Standard German (Standarddeutsch) female voice. Dnn technology.",
        "language": "de-DE",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/de-DE_ErikaV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-US_OliviaV3Voice",
        "customizable": true,
        "description": "Olivia: American English female voice. Dnn technology.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_OliviaV3Voice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "es-US_SofiaVoice",
        "customizable": true,
        "description": "Sofia: North American Spanish (español norteamericano) female voice.",
        "language": "es-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/es-US_SofiaVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "fr-FR_ReneeVoice",
        "customizable": true,
        "description": "Renee: French (français) female voice.",
        "language": "fr-FR",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/fr-FR_ReneeVoice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": true
        },
        "name": "en-US_MichaelVoice",
        "customizable": true,
        "description": "Michael: American English male voice.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_MichaelVoice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "es-ES_EnriqueVoice",
        "customizable": true,
        "description": "Enrique: Castilian Spanish (español castellano) male voice.",
        "language": "es-ES",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/es-ES_EnriqueVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": true
        },
        "name": "en-US_LisaVoice",
        "customizable": true,
        "description": "Lisa: American English female voice.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_LisaVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "ja-JP_EmiVoice",
        "customizable": true,
        "description": "Emi: Japanese (日本語) female voice.",
        "language": "ja-JP",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/ja-JP_EmiVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "de-DE_BirgitVoice",
        "customizable": true,
        "description": "Birgit: Standard German (Standarddeutsch) female voice.",
        "language": "de-DE",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/de-DE_BirgitVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "en-GB_KateVoice",
        "customizable": true,
        "description": "Kate: British English female voice.",
        "language": "en-GB",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-GB_KateVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "it-IT_FrancescaVoice",
        "customizable": true,
        "description": "Francesca: Italian (italiano) female voice.",
        "language": "it-IT",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/it-IT_FrancescaVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "es-ES_LauraVoice",
        "customizable": true,
        "description": "Laura: Castilian Spanish (español castellano) female voice.",
        "language": "es-ES",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/es-ES_LauraVoice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "name": "de-DE_DieterVoice",
        "customizable": true,
        "description": "Dieter: Standard German (Standarddeutsch) male voice.",
        "language": "de-DE",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/de-DE_DieterVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": true
        },
        "name": "en-US_AllisonVoice",
        "customizable": true,
        "description": "Allison: American English female voice.",
        "language": "en-US",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/en-US_AllisonVoice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": false,
            "voice_transformation": false
        },
        "customizable": false,
        "name": "ar-AR_OmarVoice",
        "description": "Omar: Arabic male voice.",
        "language": "ar-AR",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/ar-AR_OmarVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "customizable": true,
        "name": "ko-KR_YoungmiVoice",
        "description": "Youngmi: Korean female voice.",
        "language": "ko-KR",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/ko-KR_YoungmiVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "customizable": true,
        "name": "ko-KR_YunaVoice",
        "description": "Yuna: Korean female voice.",
        "language": "ko-KR",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/ko-KR_YunaVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "customizable": true,
        "name": "nl-NL_EmmaVoice",
        "description": "Emma: Dutch female voice.",
        "language": "nl-NL",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/nl-NL_EmmaVoice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "customizable": true,
        "name": "nl-NL_LiamVoice",
        "description": "Liam: Dutch male voice.",
        "language": "nl-NL",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/nl-NL_LiamVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "customizable": true,
        "name": "zh-CN_LiNaVoice",
        "description": "Li Na: Chinese (Mandarin) female voice.",
        "language": "zh-CN",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/zh-CN_LiNaVoice"
    },
    {
        "gender": "male",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "customizable": true,
        "name": "zh-CN_WangWeiVoice",
        "description": "Wang Wei: Chinese (Mandarin) male voice.",
        "language": "zh-CN",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/zh-CN_WangWeiVoice"
    },
    {
        "gender": "female",
        "supported_features": {
            "custom_pronunciation": true,
            "voice_transformation": false
        },
        "customizable": true,
        "name": "zh-CN_ZhangJingVoice",
        "description": "Zhang Jing: Chinese (Mandarin) female voice.",
        "language": "zh-CN",
        "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/f699a8bc-7c48-42e4-9f4d-432f5ff321ed/v1/voices/zh-CN_ZhangJingVoice"
    }
]

export default voiceList;