# TeamSpeak 3 Definitions
This package provide a simple way to use the TeamSpeak 3 definitions used by the server.

[![Donate](https://img.shields.io/badge/%E2%99%A5-donate-459042.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MAKZLQGRSBCT2)

## Installation
```
npm install @ts3/definitions
```

### Usage

#### Typescript
```typescript
import {TS3Definitions} from "@ts3/definitions";
console.log(TS3Definitions.HostMessageMode.MODALQUIT); // Display 3
```

#### Javascript
```javascript
const TS3Definitions = require("@ts3/definitions");
console.log(TS3Definitions.HostMessageMode.MODALQUIT); // Display 3
```

### Definitions
Here is the full list of available definitions

#### HostMessageMode

Key | Value | Description
----|-------|-------------
NONE | 0 | Don't display anything
LOG | 1 | Display message in chatlog
MODAL | 2 | Display message in modal dialog
MODALQUIT | 3 | Display message in modal dialog and close connection

#### HostBannerMode

Key | Value | Description
----|-------|-------------
NOADJUST | 0 | Do not adjust
IGNOREASPECT | 1 | Adjust but ignore aspect ratio (like TeamSpeak 2)
KEEPASPECT | 2 | Adjust and keep aspect ratio

#### Codec

Key | Value | Description
----|-------|-------------
SPEEX_NARROWBAND | 0 | Speex narrowband (mono, 16bit, 8kHz)
SPEEX_WIDEBAND | 1 | Speex wideband (mono, 16bit, 16kHz)
SPEEX_ULTRAWIDEBAND | 2 | Speex ultra-wideband (mono, 16bit, 32kHz)
CELT_MONO | 3 | Celt mono (mono, 16bit, 48kHz)

#### CodecEncryptionMode

Key | Value | Description
----|-------|-------------
INDIVIDUAL | 0 | Encryption enabled per channel
DISABLED | 1 | Encryption globally disabled
ENABLED | 2 | Encryption globally enabled

#### TextMessageTargetMode

Key | Value | Description
----|-------|-------------
CLIENT | 1 |  Target is a client
CHANNEL | 2 | Target is a channel
SERVER | 3 | Target is a virtual server

#### LogLevel

Key | Value | Description
----|-------|-------------
ERROR | 1 | Everything that is really bad
WARNING | 2 | Everything that might be bad
DEBUG | 3 | Output that might help find a problem
INFO | 4 | Informational output

#### ReasonKick

Key | Value | Description
----|-------|-------------
CHANNEL | 4 | Kick client from channel
SERVER | 5 |  Kick client from server
    
#### PermissionGroupType

Key | Value | Description
----|-------|-------------
SERVER_GROUP | 0 | Server group permission
CLIENT | 1 | Client specific permission
CHANNEL | 2 | Channel specific permission
CHANNEL_GROUP | 3 | Channel group permission
CHANNEL_CLIENT | 4 | Channel-client specific permission
        
#### TokenType

Key | Value | Description
----|-------|-------------
SERVER_GROUP | 0 | Server group token
CHANNEL_GROUP | 1 | Channel group token