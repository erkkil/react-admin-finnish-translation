# Finnish Translations for Admin-on-rest

Finnish translations for rest admin, the frontend framework for building admin applications on top of REST services.

![admin-on-rest demo](http://static.marmelab.com/admin-on-rest.gif)

## Installation

```sh
npm install --save ra-language-finnish
```

## Usage

```js
import finnishMessages from 'ra-language-finnish';

const messages = {
    'fi': finnishMessages,
};

<Admin locale="fi" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).