var images=["Om.jpg","Dad.jpg","IMG_20191028_152030.jpg","IMG_20191206_085103.jpg","IMG_20191227_080310.jpg"];
var names=["Om Popat Gaikwad","Popat Dhanagi Gaikwad","Prajawl Popat Gaikwad","Manisha Popat Gaikwad","Dhanaji Lakshaman Gaikwad"];
var i=0;
function update() 
{
    i++;
    var numbers_of_family_member_in_array=5
    if(i > numbers_of_family_member_in_array)
    {
        i=0;
    }

    var updatedImage=images[i];
    var updatedName=names[i];

    document.getElementById("family_member_image").src=updatedImage;
    document.getElementById("family_member_name").innerHTML=updatedName;
}
