---
sidebar_position: 1
---

# Auto Clicker
:::tip Want to help improve the documenation?

Click on Edit This Page to improve the documentation.

:::
## Function Meaning
|   Feature Name   |                                           Definition                                          | Required |
|:----------------:|:---------------------------------------------------------------------------------------------:|:--------:|
|      `hours`     |                          Set the number of hours between each click.                          |   false  |
|     `minutes`    |                         Set the number of minutes between each click.                         |   false  |
|     `seconds`    |                         Set the number of seconds between each click.                         |   false  |
|  `milliseconds`  |                       Set the number of milliseconds between each click.                      |   false  |
|   `mouseButton`  |                Set which button each click should perform. (Left,Middle,Right)                | **true** |
|    `clickType`   |                         Set how many clicks each click should perform.                        | **true** |
|   `repeatType`   |                 Set the repeat type of each click. (Delayed, Random, Forever)                 | **true** |
| `cursorPosition` | Set which cursor position should be choosen for each click. (Current Location, Pick Location) | **true** |

## Click Interval
This section sets the delay between each click. Only hours, minutes, seconds, and millseconds can be inputted.
:::danger Computer Limits

Due to the quality/speed of each PC, the click interval will not be exact. It may be a couple milliseconds off due to the nature of your PC. It is your job to adjust the delay so that it matches your desired delay.

:::

**Hours:** Non-Decimal Integers can be inputted into this box.

**Minutes:** Non-Decimal Integers can be inputted into this box.

**Seconds:** Non-Decimal Integers can be inputted into this box.

**Millseconds:** Non-Decimal Integers can be inputted into this box.

## Click Options
This section sets the click button and click type between each click. You can only select the options listed in the dropbox.

**Mouse Button:** Sets the click button between each Click Interval.

| Option Name | Definition                                                   |
|:-----------:|--------------------------------------------------------------|
|     Left    | Sets the click between the Click Interval to a Left Click.   |
|    Middle   | Sets the click between the Click Interval to a Middle Click. |
|    Right    | Sets the click between the Click Interval to a Right Click.  |

**Click Type:** Number of Clicks when a "click" is initiated.

| Option Name | Definition          |
|:-----------:|---------------------|
|    Single   | Clicks one time.    |
|    Double   | Clicks two times.   |
|    Triple   | Clicks three times. |

## Click Repeat
This section sets the repeat option between each click. You must select 1 option.

|      Option Name     | Definition                                                      |
|:--------------------:|-----------------------------------------------------------------|
|        Repeat        | Repeat `x` number of times.                                     |
| Repeat Until Stopped | Repeats forever until **STOP** is called.                       |
|     Random Repeat    | Repeats forever with a millisecond delay specified by the user. |

## Cursor Position
This section sets the cursor position between each click.

**Cursor Position:** Sets the position in which each click is located at.

|    Option Name   | Definition                                        |
|:----------------:|---------------------------------------------------|
| Current Location | Clicks wherever your mouse is located at.         |
|   Pick Location  | Clicks wherever you specified the click location. |

:::tip Pick Location

If you select `Pick Location`, you can use the PICK LOCATION button on the right to get the X and Y coordinates of the clikc.

:::

## HotKey
This section sets the hotkey to enhance the user's experience with the autoclicker.

|    Option Name    | Definition                                        |
|:-----------------:|---------------------------------------------------|
| Start/Stop HotKey | Sets the hotkey of the START and STOP.            |
|  Shutdown HotKey  | Sets the hotkey of shutting down the application. |