# ionic2-autosize

***ionic2-autosize*** is an Ionic2 / Angular2 directive that automatically adjusts textarea height to fit content.

It adjusts the textarea height automatically to any text input, or changes to the model bound to the textarea.

## Acknowledgements
This code based on Steve Papa's [angular2-autosize solution](https://github.com/stevepapa/angular2-autosize)

## Installation:

```bash
npm install ionic2-autosize
```

## Use Example:

```typescript
import {Component} from '@angular/core';
import {Autosize} from 'ionic2-autosize';

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
        "Before we have our squall;
        For some of us are out of breath,
        And all of us are tall!"
        "No hurry!" said the Carpenter.
        They thanked him much for all.
    </ion-textarea>
  `,
  directives: [Autosize]
})

class App {

}
```

## Authors

[Zeb Burke-Conte](http://zebburkeconte.com) & Felix

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
