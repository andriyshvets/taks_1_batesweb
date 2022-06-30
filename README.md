Your task is to create an event management admin panel. It should have the following capabilities:

- Create / Edit / Delete events. (CRUD)
- The event time should be stored using [UTC (GMT+0000) time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) in relation to the selected timezone from the dropdown. (e.g. if my time zone in the selector was GMT+0300 and I create an event at 08:00 am, it becomes 05:00 when it is stored into UTC time.)
- Ability to change the timezone (with the selector) and re-render the list of event (times) in the specified timezone.
- Ability to publish and unpublish events
    - When creating an event, it goes into the unpublished list.
    - The publish and unpublish lists use the same style. The only difference is the menu option to publish / unpublish the event.
    - User should have the ability to move an unpublished list item into the published list, and move a published item to the unpublished list using the menu.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1aada330-070f-4024-8d01-d8495986ea06/Untitled.png)
    

## Requirements / Additional Details

- [React](https://reactjs.org) or any React Based Library
- You can use any utility library you wish to accomplish the tasks in this document. (e.g. converting timezones)
- You can use any UI Library that you like (Tailwindcss is a plus)
- Create and Edit forms can be created / styled however you like.
- Use clear variable naming using full english words.
- Save all time related data in UTC format (GMT+0000).
- Display all time related data in the selected timezone. (e.g. If I have an event starting at 11:00 am UTC (GMT+0000) it should be rendered at 2:00 pm if the timezone selector is Eastern European Time… GMT+0300).
- Follow the design Figma file as close as possible.

## Assets

| Name | Description |
| --- | --- |
| Figma Design Document | Design document to be used for the code challenge. |
| Icons | Can be exported directly from the Figma Design Document https://help.figma.com/hc/en-us/articles/360040028114-Guide-to-exports-in-Figma |

## Event Data Structure

```json
{
	"events": [
			"event": {
				"id": 0,
				"title": "Lorem ipsum dolor sit amet",
				"time": "2022-06-27T07:07:08.350Z",
				"isPublished": false
			}
	]
}
```

## Timezone Data

This data should be used in the timezone selector to calculate the times when adding / editing / rendering lists. You can use whatever data you need from this list to accomplish the task (or from another source) **it is important just to get the calculations correct.**

```json
{
   "timezones":[
      {
         "id":0,
         "name": "Eastern Time - EDT",
         "value": "America/New_York",
				 "offset": "GMT-0400" 
      },
      {
         "id":1,
         "name":"Eastern European Time",
         "value":"Europe/Helsinki",
				 "offset": "GMT+0300" 
      },
      {
         "id":2,
         "name":"Central Europen Time",
         "value":"Europe/Berlin",
				 "offset": "GMT+0200" 
      },
      {
         "id":3,
         "name": "UTC",
         "value": "UTC",
				 "offset": "GMT+0000" 
      }
   ]
}
```

## Submission

Upload to your Github account and send the repository URL to

[challenge@bateswebtech.com](mailto:challenge@bateswebtech.com) at your earliest convenience (preferably within the next 7-10 days).