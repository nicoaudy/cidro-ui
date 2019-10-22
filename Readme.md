# CIDRO UI - React Native UI Library 🔥

[![npm](https://img.shields.io/npm/dt/cidro?color=blue&style=for-the-badge)](https://www.npmjs.com/package/cidro)


**Install**

📚[Documentation](https://serene-goldstine-9f6be6.netlify.com/)

```
$ npm install cidro
```

# Available Components

## Block

**Usage**

```javascript
import { Block, Text } from "cidro";

const App = () => (
  <Block safe>
    <Text h1>CIDRO 🔥</Text>
  </Block>
);
```

**Available Props**

| Property |     Type     | Default  | Description                                      |
| -------- | :----------: | :------: | ------------------------------------------------ |
| row      |     bool     |  false   | flexDirection: 'row'                             |
| column   |     bool     |  false   | flexDirection: 'column'                          |
| flex     | bool, number | false, 1 | flex: 1 or <yourNumber>                          |
| safe     |     bool     |  false   | Wrap the block with SafeAreaView                 |
| center   |     bool     |  false   | alignItems: 'center' alignSelf: 'center'         |
| middle   |     bool     |  false   | alignItems: 'center' alignSelf: 'center'         |
| top      |     bool     |  false   | alignItems: 'flex-start' alignSelf: 'flex-start' |
| bottom   |     bool     |  false   | alignItems: 'flex-end' alignSelf: 'flex-end'     |
| left     |     bool     |  false   | alignItems: 'flex-start'                         |
| right    |     bool     |  false   | alignItems: 'flex-start'                         |
| card     |     bool     |  false   | changes the border-radius, -width and -color     |
| fluid    |     bool     |  false   | width: 'auto'                                    |
| height   |    number    |   null   | changes the height of the Block                  |
| space    |    string    |   null   | options are: 'between', 'around' or 'evently'    |
| width    |    number    |   null   | changes the width of the Block                   |

---

## Toolbar

**Usage**

```javascript
import { Toolbar, Text } from "cidro";

const App = () => (
    <Toolbar
      left={<Text>Back</Text>}
      leftHandler={() => alert("left handler")}
      center={<Text>CIDRO UI 🔥</Text>}
      right={<Text>Logout</Text>}
      rightHandler={() => alert("right handler")}
);
```

**Available Props**

| Property     |   Type    | Default  | Description                                                                   |
| ------------ | :-------: | :------: | ----------------------------------------------------------------------------- |
| color        |  string   |   null   | change color                                                                  |
| noShadow     |  boolean  |  false   | Toolbar without shadow                                                        |
| height       |  number   |    52    | change height                                                                 |
| left         | component |   null   | set your own component (eg: Text or Icon)                                     |
| leftHandler  | function  | () => {} | Take an arrow function and everytime the user presses the function is called. |
| center       | component |   null   | set your own component                                                        |
| right        | component |   null   | set your own component                                                        |
| rightHandler | function  | () => {} | Take an arrow function and everytime the user presses the function is called. |
| style        |   style   |   null   | add any style to the whole container                                          |

---

## Button

**Usage**

```javascript
import { Button } from "cidro";

const App = () => <Button text="Login" onPress={action("Button pressed")} />;
```

**Available Props**

| Property |  Type  | Default | Description                                              |
| -------- | :----: | :-----: | -------------------------------------------------------- |
| text     | string |  null   | Title is required                                        |
| disabled |  bool  |  false  | Change the disabled button                               |
| loading  |  bool  |  false  | Show loading indicator                                   |
| size     | number |   10    | Change the size button                                   |
| width    | string |  null   | Change the width                                         |
| outline  |  bool  |  false  | Change button style                                      |
| type     | string | primary | Available type "primary", "success", "danger", "warning" |

---

## Text

**Usage**

```javascript
import { Text } from "cidro";

const App = () => <Text h1>CIDRO UI 🔥</Text>;
```

**Available Props**

| Property |  Type  | Default | Description                       |
| -------- | :----: | :-----: | --------------------------------- |
| h1       |  bool  |  false  | Sets the text's fontSize to 44px. |
| h2       |  bool  |  false  | Sets the text's fontSize to 38px. |
| h3       |  bool  |  false  | Sets the text's fontSize to 30px. |
| h4       |  bool  |  false  | Sets the text's fontSize to 24px. |
| h5       |  bool  |  false  | Sets the text's fontSize to 18px. |
| p        |  bool  |  false  | Sets the text's fontSize to 16px. |
| size     | number |    0    | Sets the fontSize of the text.    |
| color    | string |  null   | Sets the color of the text.       |
| muted    |  bool  |  false  | Changes the text color            |
| bold     |  bool  |  false  | Sets the fontWeight to 'bold'.    |
| italic   |  bool  |  false  | Sets the fontStyle to 'italic'.   |

---

## Form

**Usage**

```javascript
import { Form } from "cidro";

const App = () => (
  <Form title="Helo 🔥" subtitle="Cidro is awesome because built with ❤️">
    <View style={{ flex: 1, backgroundColor: "papayawhip" }} />
  </Form>
);
```

**Available Props**

| Property |     Type     |   Default   | Description            |
| -------- | :----------: | :---------: | ---------------------- |
| children |  component   |    null     | set your own component |
| title    | bool, string | false, null | set your title         |
| subtitle | bool, string | false, null | set your subtitle      |

---

## Input

**Usage**

```javascript
import { TextInput } from "cidro";

const App = () => (
  <TextInput
    label="Email"
    value="cidro@ui.good"
    keyboardType="email-address"
    onChangeText={() => alert("Text On Change")}
  />
);
```

**Available Props**

| Property |  Type  | Default | Description                                          |
| -------- | :----: | :-----: | ---------------------------------------------------- |
| label    | string |  null   | set your label                                       |
| message  | string |  null   | set your message (eg: "Whops your email is invalid") |
| type     | string |  null   | Available type "success", "error"                    |

---

## Avatar

**Usage**

```javascript
import { Avatar } from "cidro";

const App = () => (
  <Avatar source={{ uri: "https://facebook.github.io/react/logo-og.png" }} />
);
```

**Available Props**

| Property |  Type   | Default | Description                                               |
| -------- | :-----: | :-----: | --------------------------------------------------------- |
| size     | number  |   60    | set size                                                  |
| source   |   any   |  null   | set image source, can be static from your app or external |
| circle   | boolean |  false  | set border radius / 2 if set true                         |
| style    |  style  |  null   | add any style to the whole container                      |

---

## Avatar Text

**Usage**

```javascript
import { AvatarText } from "cidro";

const App = () => <AvatarText title="Cidro UI" />;
```

**Available Props**

| Property        |  Type   | Default | Description                          |
| --------------- | :-----: | :-----: | ------------------------------------ |
| title           | string  |  null   | set title for initials               |
| size            | number  |   60    | set size                             |
| backgroundColor | string  |  black  | set background color                 |
| textColor       | string  |  white  | set text title color                 |
| circle          | boolean |  false  | set border radius / 2 if set true    |
| style           |  style  |  null   | add any style to the whole container |

## Support

<a href="https://www.buymeacoffee.com/sAb9PGzxT" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
