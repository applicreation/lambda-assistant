# Lambda Assistant

## Install

```bash
npm install --save lambda-assistant
```

## Usage

```javascript
import { ApiGateway } from 'lambda-assistant';

export function handler(event, context, callback) {
  const body = ApiGateway.Event.getBody();

  return callback(null, ApiGateway.Callback.ok(body));
}
```

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
