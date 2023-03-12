@props([
    'event' => '',
    'extra' => ''
])
<div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-2 cursor-move' data-event='@json($extra)'>
    <div class='fc-event-main' >{{$event}}</div>
</div>
