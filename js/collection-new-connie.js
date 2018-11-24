var cafe_link_img_name_Data=[
    { 
        'cafe-link':'cafe_page=The-Bean-Palace',
        'cafe-img':'Cafe1.png',
        'cafe-name':'The-Bean-Palace'
    },{
        'cafe-img':'Cafe2.png',
        'cafe-name':'Lava-Java'
    },{
        'cafe-img':'Cafe3.png',
        'cafe-name':'The-Grind'
    },{
        'cafe-img':'Cafe4.png',
        'cafe-name':'No-Social-Life'
    },{
        'cafe-img':'Cafe5.png',
        'cafe-name':'No-Doze-Cafe'
    },{
        'cafe-img':'Cafe6.png',
        'cafe-name':'Aroma-Mocha'
    },{
        'cafe-img':'Cafe7.png',
        'cafe-name':'The-Split-Bean'
    },{
        'cafe-img':'Cafe8.png',
        'cafe-name':'Happy-Orange'
    },{
        'cafe-img':'Cafe9.png',
        'cafe-name':'Black-Sugars'
    },{
        'cafe-img':'Cafe10.png',
        'cafe-name':'Bees'
    },{
        'cafe-img':'Cafe11.png',
        'cafe-name':'QnA',
    },{
        'cafe-img':'Cafe12.png',
        'cafe-name':'Cute-Cups'
    },{
        'cafe-img':'Cafe13.png',
        'cafe-name':'Amooze'
    },{
        'cafe-img':'Cafe14.png',
        'cafe-name':'CHao'
    },{
        'cafe-img':'Cafe15.png',
        'cafe-name':'Merp'
    },{   
        'cafe-img':'Cafe16.png',
        'cafe-name':'GRE'
    }
];


/**
 * Description: Given a cafe and a collection, will add the given cafe as a bootstrap
 * card to the given collection
 * 
 * Input: 
 *     cafe - id of the cafe
 *     collection - id of the collection (collection1, collection2, collection3, or collection4)
 * Output:
 *     alerts user that the cafe has been added to the selected collection
 * LocalStorage change:
 *      LocalStorage's key collection<number>HTML to append given cafe
 * Interface change:
 *     The 'Save Cafe' button is changed to 'Cafe Saved to a Collection'
 */
function addCafeToCollection(cafe, collection){
    var collection_name = (collection+"name").innerHTML;
    var cafe_name = cafe.split('-').join(' ');

    //if not a collection, alert user
    if(!isCollection(collection)){

    }

    //attempt addCollectionToCafe(). if cafe already in collection, alert user
    var temp = addCollectionToCafe(cafe, collection);
    if(!temp){
        window.alert(cafe_name + ' is already in ' + collection_name + '.');
    }
    //else if temp==true, then update collection<number>HTML
    else{
        //compile cafeCard template
        var source = $('#cafeCard').html();
        var template = Handlebars.compile(source);
        var curHTML = template(curData);

        //initialize or update collection<number>HTML
    }

    var curData = {
        'cafe_link':'',
        'cafe_img':'',
        'cafe_name':'',   
    };
    
    //compile template cafeCard
    
    // Update addHTML in localStorage (initialize or append)
    if(localStorage.getItem('addHTML') == null){
        localStorage.setItem('addHTML', curHTML)
    }else{
        new_addHTML_inLS = localStorage.getItem('addHTML') + curHTML;
        localStorage.setItem('addHTML', new_addHTML_inLS);
    }


    console.log('addHTML = ', localStorage.getItem('addHTML'));
        

    //update curr_num
    curr_num++;
    localStorage.setItem('num', curr_num);

    console.log('num after =', localStorage.getItem('num'));
    document.getElementById('inputCollectionName').value = '';

    //update button
    toggleSaveCafeButton(cafe);

    //alert user
    window.alert('Successfully added ' + cafe_name + ' to the collection ' + collection_name);
    closeNav();
}

/**
 * Description: Given a cafe and a collection, will add the given collection to the corresponding
 * cafe's list of collections it has been added to. The cafe's collection list is a list of length
 * 4, where at each index, it is either a 0 or a 1. 0 will represent that the cafe has not been
 * added to the collection(index+1). 1 will represent that the cafe has been added to collection(index+1)
 * 
 * Input:
 *      cafe - id of the cafe
 *      collection - id of the collection (collection1, collection2, collection3, or collection4)
 * Output:
 *      true if collection successfully added to cafe's list (cafe was not previously in collection)
 *      false if collection failed to be added to cafe's list (cafe was previously already in collection)
 * LocalStorage change:
 *      LocalStorage's key <cafe name>List will have been updated to the new list
 * Interface change:
 *      none
 */
function addCollectionToCafe(cafe,collection){
    //get collection number (1,2,3,or 4)
    var collection_number = parseInt(collection[collection.length-1], 10);
    //if not <cafe name>List exists, initialize & add collection to cafe
    if(localStorage.getItem(cafe+'List') == null){
        var cafe_list = [0,0,0,0];
        cafe_list[collection_number-1] = 1;
        localStorage.setItem(cafe+'List', cafe_list);
        return true;
    }
    //else check the list to see if collection is already added
    else{
        var cafe_list = localStorage.getItem(cafe+'List');
        if(cafe_list[collection_number-1]==1){
            return false;
        }else{
            cafe_list[collection_number-1]=1;
            return true;
        }
    }
}

/**
 * Description: For the given cafe, will toggle the 'Save Cafe' button to 'Cafe Saved to a Collection',
 * vice versa, or no change depending on the cafe's corresponding <cafe name>List on LocalStorage.
 * 
 * Input:
 *      cafe - id of the cafe
 * Output:
 *      none
 * LocalStorage change:
 *      none
 * Interface change:
 *      Depending on the status of the cafe, the 'Save Cafe' button might get changed to 'Cafe Saved to a Collection'
 *      or from 'Cafe Saved to a Collection' to 'Save Cafe'
 *      or no change
 */
function toggleSaveCafeButton(cafe){}

/**
 * Description: Removes the given cafe from the given collection.
 * 
 * Input:
 *      cafe - id of the cafe
 * Output:
 *      * first checks if the users is sure about removing the selected cafe from the selected collection
 *      * alerts the user that the cafe has now been removed from the selected collection
 * LocalStorage change:
 *      updates <cafe name>List to change the corresponding collection index value to 0
 *      updates collection<number>HTML to remove the cafe.
 * Interface change:
 *      the removed cafe will no longer show up in under the collection is was removed from on the collection page
 */
function removeCafeFromCollection(cafe, collection){}

/**
 * Description: changes the selected collection's name to the given newName
 * 
 * Input:
 *      collection - id of the collection
 *      newName - newName that the user wants the collection to be changed into
 */
function changeCollectionName(collection, newName){}