/*<html>
    <head>
        <title>JS Array CRUD - https://codeofaninja.com</title>
    </head>
    
<body>

    <!–
        -example row of items
        -id is the item number
        -common class name
    –>

Item 1 <input type="text" id="1" class="item" /><br />
Item 2 <input type="text" id="2" class="item" /><br />
Item 3 <input type="text" id="3" class="item" /><br />
Item 4 <input type="text" id="4" class="item" /><br />
Item 5 <input type="text" id="5" class="item" /><br />
 
<br />
<br />
 
<!– display the operations here –>
<b>Actions:</b>
<div id="status"></div>
 
<br />
 
<!– display the array length and items –>
<b>All Items:</b>
<div id="results"></div>
 
</body>
</html>*/


/* include the jquery */

 
<script type="text/javascript">
    //inisialisation des variable global
    var items = [];
    
    $(document).ready(function(){
    
        //we use the jquery blur event
        $(".item").blur(function(){
        
            //in this example, the item id is the id attribute of the element
            var item_id = $(this).attr("id");
            
            //item value is the inputtedvalue
            var item_value = $(this).val();
            
            //then process the item
            process_item(item_id,item_value);
        });
        
    });
    
    // ———— functions [START] ————
 
    // process item, usually based in item id
    function process_item(item_id,item_value){
        
        if(item_value==""){
            //if item value is empty, delete from the array
            delete_item(item_id);
        }
        else if(checkIfExists(item_id)){
            //search if item_id exists in the array
            //if item exists, edit it
            edit(item_id,item_value);
        }
        else if(!checkIfExists(item_id)){
            //if item does not exist, add it
            add(item_id,item_value);
        }
        
        //read the items
        showAllItems();
    }
    
    // ajouter
    function add(item_id,item_value){
        items.push({
            "item_id" : item_id,
            "item_value" : item_value
        });
        $("#status").text("Successfully added.");
    }
 
    // editer
    function edit(item_id,item_value){
        <html>
        <head>
            <title>JS Array CRUD - https://codeofaninja.com</title>
        </head>
        
    <body>
        //delete first
        items.remove("item_id", item_id);
        
        //then add again
        items.push({
            "item_id" : item_id,
            "item_value" : item_value
        });
        $("#status").text("successfully edited.");
            
    }
    
    // DELETE
    function delete_item(item_id){
        items.remove("item_id", item_id);
        $("#status").text("Successfully deleted.");
    }
    
    // READ
    function showAllItems(){
        
        //clear results text
        $("#results").text("");
        
        var arr_len = items.length;
        
        // display also the array length
        $("#results").append("Array len: " + arr_len+ "<br />");
        
        //loop through the array to read the items
        for(var x=0; x<arr_len; x++){
            v<html>
            <head>
                <title>JS Array CRUD - https://codeofaninja.com</title>
            </head>
            
        <body>/append to results div to display
            $("#results").append("item_id: " + item_id + " >>> item_value: " + item_value + "<br />");
        }
    }
    
    function checkIfExists(check_item_id){
        
        //get the array length first
        var arr_len = items.length;
        
        //search the array
        //there might be another way
        for(var x=0; x<arr_len; x++){
            var item_id = items[x]['item_id'];
            var item_value = items[x]['item_value'];
            
            if(check_item_id==item_id){
                //it means the item exists
                return true;
            }
        }
        
        return false;
    }
    
    //needs a remove function
    Array.prototype.remove = function(name, value) {
        array = this;
        var rest = $.grep(this, function(item){
            return (item[name] != value);  
        });
 
        array.length = rest.length;
        $.each(rest, function(n, obj) {
            array[n] = obj;
        });
    };
    // ———— functions [END] ————
</script>