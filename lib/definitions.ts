let TS3Definitions = {
    HostMessageMode: {
        NONE: 0,
        LOG: 1,
        MODAL: 2,
        MODALQUIT: 3,
    },
    HostBannerMode: {
        NOADJUST: 0,
        IGNOREASPECT: 1,
        KEEPASPECT: 2,
    },
    Codec: {
        SPEEX_NARROWBAND: 0,
        SPEEX_WIDEBAND: 1,
        SPEEX_ULTRAWIDEBAND: 2,
        CELT_MONO: 3,
    },
    CodecEncryptionMode: {
        INDIVIDUAL: 0,
        DISABLED: 1,
        ENABLED: 2
    },
    TextMessageTargetMode: {
        CLIENT: 1,
        CHANNEL: 2,
        SERVER: 3,
    },
    LogLevel: {
        ERROR: 1,
        WARNING: 2,
        DEBUG: 3,
        INFO: 4,
    },
    ReasonKick: {
        CHANNEL: 4,
        SERVER: 5,
    },
    PermissionGroupType: {
        SERVER_GROUP: 0,
        GLOBAL_CLIENT: 1,
        CHANNEL: 2,
        CHANNEL_GROUP: 3,
        CHANNEL_CLIENT: 4,
    },
    TokenType: {
        SERVER_GROUP: 0,
        CHANNEL_GROUP: 1,
    }
};

export {TS3Definitions};