declare let TS3Definitions: {
    HostMessageMode: {
        NONE: number;
        LOG: number;
        MODAL: number;
        MODALQUIT: number;
    };
    HostBannerMode: {
        NOADJUST: number;
        IGNOREASPECT: number;
        KEEPASPECT: number;
    };
    Codec: {
        SPEEX_NARROWBAND: number;
        SPEEX_WIDEBAND: number;
        SPEEX_ULTRAWIDEBAND: number;
        CELT_MONO: number;
    };
    CodecEncryptionMode: {
        INDIVIDUAL: number;
        DISABLED: number;
        ENABLED: number;
    };
    TextMessageTargetMode: {
        CLIENT: number;
        CHANNEL: number;
        SERVER: number;
    };
    LogLevel: {
        ERROR: number;
        WARNING: number;
        DEBUG: number;
        INFO: number;
    };
    ReasonKick: {
        CHANNEL: number;
        SERVER: number;
    };
    PermissionGroupType: {
        SERVER_GROUP: number;
        GLOBAL_CLIENT: number;
        CHANNEL: number;
        CHANNEL_GROUP: number;
        CHANNEL_CLIENT: number;
    };
    TokenType: {
        SERVER_GROUP: number;
        CHANNEL_GROUP: number;
    };
};
export { TS3Definitions };
