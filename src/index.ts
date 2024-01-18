const str1 = `
before a matched string

: Microsoft Teams meeting
Join on your computer, mobile app or room device
[Click here to join the meeting] ....
Or call in (audio only)
+1 954-289-1826,,295688580#   United States, Fort Lauderdale
Phone Conference ID: 295 688 580#
.....93da90258200&threadId=19_meeting_YTM5M2JlY2MtOTc0Zi00Zjg1LWJmMmMtYTVlMGFhNTZiYjAx@thread.v2&messageId=0&language=en-US__;!!J-1DKIBqn-Pi!E1Lum348sDmKcIWwBNjmbL6O65u_RwyayJCg-pXeX7GxV_Rk_CaBX9UpIRkAaIXcUdpoGo7V6g2yPxhkIPG4K-qq45WC$)
`;

const r = str1.replace(/: Microsoft Teams meeting.+/s, 'replacement');

console.log(r);
