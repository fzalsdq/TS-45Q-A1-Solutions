 
 function make_album (album_name:string, album_title :string , Tracks?: number) { 
    const album = { 
        Name:album_name, 
        Title:album_title, 
        Tracks: Tracks
     };

    console.log(`Album Name : ${album_name}` ); 
    console.log(`Album Title: ${album_title}`);
    if (Tracks==undefined) {
        console.log("No. of Tracks:" + " " + "No Track Record");    
    }
    else {
        console.log("No. of Tracks:" + " " + Tracks);
    }
     
 
} 
make_album("Escape", "Derek Parker");
make_album("Classical", "Bosch",4);
make_album("New Way", "Neil Woodwords");
make_album("Montreal", "Galant Russell",3);


