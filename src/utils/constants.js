export const GOOGLE_API_KEY = 'AIzaSyBEA7Wf9l7O6Wt0JN42np1ZDeoEZtQ6oJY';

export const YOUTUBE_VIDEO_LIST_API = 
'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='
+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 
//'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=';
//'/api/suggest?client=youtube&ds=yt&client=firefox&q='
'https://www.googleapis.com/youtube/v3/search'