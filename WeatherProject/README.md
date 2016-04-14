# Weather Project

## Install

### iOS

On iOS, if the bundle doesn't work, run:

```
react-native start
```

If that fails because the port 8081 is already used, find the pid of the process running on port 8081:

```
lsof -n -i4TCP:8081
```

then kill that process

```
kill -9 [pid number goes here]
```

and finally try again to start react native with:

```
react-native start
```

## Releases

### v0.0.2
Fixes and updates to work with the new React Native.

- react-native version in package.json
- fixed call to weather api
- updated layout

### v0.0.1
Original code from the O'Reilly book "Learning React Native", Bonnie Eisenman.
