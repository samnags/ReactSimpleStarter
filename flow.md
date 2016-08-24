the app boots up
video is an empty array
selected video is null

we go into video detail
video detail isn't provided a video, so we get loading message
simultaneously, request to YT to get list of videos
when request is completed, we pass videos and selected video to setState

since we change state, it causes our component to re-render
video detail is re-rendered with the changed values of this.state.selectedState



original video selection flow with callback going two+ levels deep
- in app, we wrote function onVideoSelect whose purpose is to change state
  - takes video and updates selected video-list
- passed that property to video_list
- pass that property and pass to video_list_item   
- video_list-item says when I'm clicked, run that function with that video
