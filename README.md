# angular2-autosize

***ionic2-autosize*** is an Angular2 directive that automatically adjusts textarea height to fit content.

It adjusts the textarea height automatically to any text input, or changes to the model bound to the textarea.

## Acknowledgements
This code based on Steve Papa's [angluar2-autoresize solution](https://github.com/stevepapa/angular2-autoresize)

## Installation:

```bash
npm install ionic2-autosize
```

## Use Example:

```typescript
import {Component} from '@angular/core';
import {Autosize} from 'angular2-autosize';

@Component({
  template: `
    <ion-textarea autosize>
        "The time has come," the Walrus said,
        "To talk of many things:
        Of shoes--and ships--and sealing-wax--
        Of cabbages--and kings--
        And why the sea is boiling hot--
        And whether pigs have wings."

        "But wait a bit," the Oysters cried,
        "Before we have our chat;
        For some of us are out of breath,
        And all of us are tall!"
        "No hurry!" said the Carpenter.
        They thanked him much for that.
    </ion-textarea>
  `,
  directives: [Autosize]
})

class App {

}
```

## Author

[Zeb Burke-Conte](http://zebburkeconte.com)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.