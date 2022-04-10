//
// Components
//

// Labels
//isc.Label.create({
//    left: 200, top: 200,
//    width: 20,
//    contents: "Hello World",
//    overflow: "hidden"
//})

// Button
//isc.Button.create({
//    title: "Click me",
//    width: 200
//})

// Hello World button
//isc.Button.create({
//    title: "Hello",
//    click: "isc.say('Hello World')"
//})

// Buttons with ID
// In console run hiddenBtn.show() to display button
//isc.Button.create({
//    ID: "hiddenBtn",
//    title: "Hidden",
//    autoDraw: false
//})

// Button event handlers
//isc.Button.create({
//    ID: "clickBtn",
//    title: "click me",
//    click: "isc.warn('button was clicked')"
//})

// Button handlers cleaner look
//isc.Button.create({
//    ID: "clickBtn",
//    title: "click me",
//    click: function () {
//        isc.warn('button was clicked');
//    }
//})

// Button handlers possibly cleaniest, referencing external method or for extended logic
//isc.Button.create({
//    ID: "clickBtn",
//    title: "click me",
//    click: "clickBtnClicked()"
//})
//function clickBtnClicked() {
//    isc.warn('button was clicked');
//}

// Fields
//isc.ListGrid.create({
//    ID: "contactsList",
//    left: 50, top: 50,
//    width: 300,
//    fields: [
//        { name: "salutation", title: "Title" },
//        { name: "firstname", title: "First Name" },
//        { name: "lastname", title: "Last Name" }
//    ],
//    data: [
//        { salutation: "Ms", firstname: "Kathy", lastname: "Whitting" },
//        { salutation: "Mr", firstname: "Chris", lastname: "Glover" },
//        { salutation: "Mrs", firstname: "Gwen", lastname: "Glover" }
//    ]
//})

//isc.DynamicForm.create({
//    ID: "contactsForm",
//    left: 50, top: 250,
//    width: 300,
//    fields: [
//        { name: "salutation", title: "Title" },
//        { name: "firstname", title: "First Name" },
//        { name: "lastname", title: "Last Name" }
//    ]
//})

// using editorTypes
//isc.DynamicForm.create({
//    ID: "contactsForm", left: 50, top: 250, width: 300,
//    fields: [
//        {
//            name: "salutation", title: "Title", editorType: "select",
//            valueMap: ["Ms", "Mr", "Mrs"]
//        },
//        { name: "firstname", title: "First Name" },
//        { name: "lastname", title: "Last Name" },
//        { name: "birthday", title: "Birthday", editorType: "date" },
//        {
//            name: "employment", title: "Status", editorType: "radioGroup",
//            valueMap: ["Employed", "Unemployed"]
//        },
//        { name: "bio", title: "Biography", editorType: "textArea" },
//        { name: "followup", title: "Follow up", editorType: "checkbox" }
//    ]
//})

// Layouts
//isc.HLayout.create({
//    ID: "myPageHeader",
//    width: "100%",
//    height: "100%",
//    layoutMargin: 10,
//    membersMargin: 6,
//    border: "1px dashed blue",
//    align: "center",
//    members: [
//        isc.Img.create({ src: "myLogo.png" }),
//        isc.LayoutSpacer.create({ width: "*" }),
//        isc.Label.create({ contents: "My Title" })
//    ]
//})

// HLayouts are horizontaly stacked like below: 
// [][][][]

// VLayouts are vertically stacked like below:
// ()
// ()
// ()
// ()

// HLayout
//isc.HLayout.create({
//    ID: "hLayoutAlignCenter",
//    autoDraw: true,
//    top: "2%",
//    left: "1%",
//    // Specifying the width creates space within which to
//    // center the members.
//    width: "98%",
//    height: "96%",
//    layoutMargin: 25,
//    membersMargin: 25,
//    border: "1px dashed blue",
//    align: "center",  // Horizontally centered but vertically top
//    //defaultLayoutAlign: "center", // Vertically centers members
//    members: [
//        isc.Canvas.create({
//            height: 40,
//            width: 40,
//            backgroundColor: "red",
//            contents: "1"
//        }),
//        isc.Canvas.create({
//            height: 40,
//            width: 40,
//            backgroundColor: "green",
//            contents: "2"
//        }),
//        isc.Canvas.create({
//            height: 40,
//            width: 40,
//            backgroundColor: "blue",
//            contents: "3"
//        })
//    ]
//});

// Layout Spacers
//isc.HLayout.create({
//    ID: "hLayoutAlignCenter",
//    autoDraw: true,
//    top: "2%",
//    left: "1%",
//    // Specifying the width creates space within which to
//    // center the members.
//    width: "98%",
//    height: "96%",
//    layoutMargin: 25,
//    membersMargin: 25,
//    border: "1px dashed blue",
//    //align: "center",  // Horizontally centered but vertically top
//    //defaultLayoutAlign: "center", // Vertically centers members
//    members: [
//        isc.Canvas.create({
//            height: 40,
//            width: 40,
//            backgroundColor: "red",
//            contents: "1"
//        }),
//        isc.LayoutSpacer.create(),
//        isc.Canvas.create({
//            height: 40,
//            width: 40,
//            backgroundColor: "green",
//            contents: "2"
//        }),
//        isc.LayoutSpacer.create(),
//        isc.Canvas.create({
//            height: 40,
//            width: 40,
//            backgroundColor: "blue",
//            contents: "3"
//        }),
//        isc.LayoutSpacer.create()
//    ]
//});

// Split Pane
//function createSplitPane() {

//    var detailPane = isc.DetailViewer.create({
//        //dataSource: "supplyItem",
//        autoDraw: false,
//        members: [
//            isc.SplitPane.create({
//                autoDraw: false,

//            })
//        ]
//    });

//    var listPane = isc.ListGrid.create({
//        autoDraw: false,
//        //dataSource: "supplyItem",
//        recordClick: function (grid, record, rowNum) {
//            detailPane.viewSelectedData(this);
//            splitPane.showDetailPane((rowNum + 1) + " of " + grid.getTotalRows(), null, "forward");
//        }
//    });
//    if (isc.Browser.isTablet) {
//        listPane.addProperties({ fields: [{ name: "itemName" }, { name: "unitCost" }, { name: "inStock" }] });
//    }

//    var navigationPane = isc.TreeGrid.create({
//        autoDraw: false,
//        //dataSource: "supplyCategory", autoFetchData: true,
//        showHeader: isc.Browser.isDesktop,
//        selectionUpdated: function () {
//            this.splitPane.setDetailTitle(null);
//            detailPane.setData([]);
//        },
//        nodeClick: function (grid, record) {
//            listPane.fetchRelatedData(record, this);
//            splitPane.showListPane(record.categoryName, null, "forward");
//        }
//    });

//    var splitPane = isc.SplitPane.create({
//        autoDraw: false,
//        navigationTitle: "Categories",
//        showLeftButton: false,
//        showRightButton: false,
//        border: "1px solid blue",
//        detailPane: detailPane,
//        listPane: listPane,
//        navigationPane: navigationPane,
//        autoNavigate: false
//    });

//    return splitPane;
//}

//isc.VLayout.create({
//    width: "100%",
//    height: "100%",
//    members: [createSplitPane()]
//});


