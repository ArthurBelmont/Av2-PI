gdjs.MyGameCode = {};
gdjs.MyGameCode.GDNewObject5Objects1= [];
gdjs.MyGameCode.GDNewObject5Objects2= [];
gdjs.MyGameCode.GDNewObject5Objects3= [];
gdjs.MyGameCode.GDMindaObjects1= [];
gdjs.MyGameCode.GDMindaObjects2= [];
gdjs.MyGameCode.GDMindaObjects3= [];
gdjs.MyGameCode.GDTilebgObjects1= [];
gdjs.MyGameCode.GDTilebgObjects2= [];
gdjs.MyGameCode.GDTilebgObjects3= [];
gdjs.MyGameCode.GDAvatarObjects1= [];
gdjs.MyGameCode.GDAvatarObjects2= [];
gdjs.MyGameCode.GDAvatarObjects3= [];
gdjs.MyGameCode.GDObstacleObjects1= [];
gdjs.MyGameCode.GDObstacleObjects2= [];
gdjs.MyGameCode.GDObstacleObjects3= [];
gdjs.MyGameCode.GDNewObjectObjects1= [];
gdjs.MyGameCode.GDNewObjectObjects2= [];
gdjs.MyGameCode.GDNewObjectObjects3= [];
gdjs.MyGameCode.GDNewObject2Objects1= [];
gdjs.MyGameCode.GDNewObject2Objects2= [];
gdjs.MyGameCode.GDNewObject2Objects3= [];
gdjs.MyGameCode.GDNewObject3Objects1= [];
gdjs.MyGameCode.GDNewObject3Objects2= [];
gdjs.MyGameCode.GDNewObject3Objects3= [];
gdjs.MyGameCode.GDNewObject4Objects1= [];
gdjs.MyGameCode.GDNewObject4Objects2= [];
gdjs.MyGameCode.GDNewObject4Objects3= [];
gdjs.MyGameCode.GDtextObjects1= [];
gdjs.MyGameCode.GDtextObjects2= [];
gdjs.MyGameCode.GDtextObjects3= [];
gdjs.MyGameCode.GDPedraObjects1= [];
gdjs.MyGameCode.GDPedraObjects2= [];
gdjs.MyGameCode.GDPedraObjects3= [];
gdjs.MyGameCode.GDPredio2Objects1= [];
gdjs.MyGameCode.GDPredio2Objects2= [];
gdjs.MyGameCode.GDPredio2Objects3= [];
gdjs.MyGameCode.GDitemObjects1= [];
gdjs.MyGameCode.GDitemObjects2= [];
gdjs.MyGameCode.GDitemObjects3= [];
gdjs.MyGameCode.GDitem_95hudObjects1= [];
gdjs.MyGameCode.GDitem_95hudObjects2= [];
gdjs.MyGameCode.GDitem_95hudObjects3= [];
gdjs.MyGameCode.GDscoreObjects1= [];
gdjs.MyGameCode.GDscoreObjects2= [];
gdjs.MyGameCode.GDscoreObjects3= [];
gdjs.MyGameCode.GDtext2Objects1= [];
gdjs.MyGameCode.GDtext2Objects2= [];
gdjs.MyGameCode.GDtext2Objects3= [];

gdjs.MyGameCode.conditionTrue_0 = {val:false};
gdjs.MyGameCode.condition0IsTrue_0 = {val:false};
gdjs.MyGameCode.condition1IsTrue_0 = {val:false};
gdjs.MyGameCode.condition2IsTrue_0 = {val:false};


gdjs.MyGameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects2);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects2);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects2);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getY() < gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) - 5 ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects2);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getY() > gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) + 5 ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


{
}

}


};gdjs.MyGameCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects2);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].setAnimation(1 + Math.round((gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").getAngle()) / 45));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects2);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDMindaObjects2.length;i<l;++i) {
    if ( !(gdjs.MyGameCode.GDMindaObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDMindaObjects2[k] = gdjs.MyGameCode.GDMindaObjects2[i];
        ++k;
    }
}
gdjs.MyGameCode.GDMindaObjects2.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDMindaObjects2 */
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MyGameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.MyGameCode.GDObstacleObjects1});gdjs.MyGameCode.eventsList2 = function(runtimeScene) {

{


gdjs.MyGameCode.condition0IsTrue_0.val = false;
gdjs.MyGameCode.condition1IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.MyGameCode.condition0IsTrue_0.val ) {
{
gdjs.MyGameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}}
if (gdjs.MyGameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.MyGameCode.GDObstacleObjects2);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.MyGameCode.GDtextObjects2);
gdjs.copyArray(runtimeScene.getObjects("text2"), gdjs.MyGameCode.GDtext2Objects2);
{for(var i = 0, len = gdjs.MyGameCode.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDObstacleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MyGameCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDtextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.MyGameCode.GDtext2Objects2.length ;i < len;++i) {
    gdjs.MyGameCode.GDtext2Objects2[i].hide();
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.MyGameCode.GDObstacleObjects1);
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects1[i].separateFromObjectsList(gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDObstacleObjects1Objects, false);
}
}}

}


};gdjs.MyGameCode.eventsList3 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.MyGameCode.GDMindaObjects1.length !== 0 ? gdjs.MyGameCode.GDMindaObjects1[0] : null), 0, 0, 1920, 1080, true, "", 0);
}}

}


};gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.MyGameCode.GDNewObject5Objects1});gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects = Hashtable.newFrom({"Minda": gdjs.MyGameCode.GDMindaObjects1});gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.MyGameCode.GDNewObject5Objects1});gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects = Hashtable.newFrom({"Minda": gdjs.MyGameCode.GDMindaObjects1});gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDitemObjects1Objects = Hashtable.newFrom({"item": gdjs.MyGameCode.GDitemObjects1});gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects = Hashtable.newFrom({"Minda": gdjs.MyGameCode.GDMindaObjects1});gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDPredio2Objects1Objects = Hashtable.newFrom({"Predio2": gdjs.MyGameCode.GDPredio2Objects1});gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects = Hashtable.newFrom({"Minda": gdjs.MyGameCode.GDMindaObjects1});gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDPredio2Objects1Objects = Hashtable.newFrom({"Predio2": gdjs.MyGameCode.GDPredio2Objects1});gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects = Hashtable.newFrom({"Minda": gdjs.MyGameCode.GDMindaObjects1});gdjs.MyGameCode.eventsList4 = function(runtimeScene) {

{


gdjs.MyGameCode.eventsList1(runtimeScene);
}


{


gdjs.MyGameCode.eventsList2(runtimeScene);
}


{


gdjs.MyGameCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.MyGameCode.GDNewObject5Objects1);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDNewObject5Objects1Objects, gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects, false, runtimeScene, false);
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDNewObject5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.MyGameCode.GDtextObjects1);
{for(var i = 0, len = gdjs.MyGameCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDtextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MyGameCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDNewObject5Objects1[i].setColor("208;2;27");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.MyGameCode.GDNewObject5Objects1);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDNewObject5Objects1Objects, gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects, true, runtimeScene, false);
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDNewObject5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.MyGameCode.GDtextObjects1);
{for(var i = 0, len = gdjs.MyGameCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDtextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MyGameCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDNewObject5Objects1[i].setColor("255;255;255");
}
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects1);
gdjs.copyArray(runtimeScene.getObjects("item"), gdjs.MyGameCode.GDitemObjects1);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDitemObjects1Objects, gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects, false, runtimeScene, false);
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDitemObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}{for(var i = 0, len = gdjs.MyGameCode.GDitemObjects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDitemObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.MyGameCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.MyGameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.MyGameCode.GDscoreObjects1);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MyGameCode.GDscoreObjects1.length;i<l;++i) {
    if ( gdjs.MyGameCode.GDscoreObjects1[i].getString() == "40" ) {
        gdjs.MyGameCode.condition0IsTrue_0.val = true;
        gdjs.MyGameCode.GDscoreObjects1[k] = gdjs.MyGameCode.GDscoreObjects1[i];
        ++k;
    }
}
gdjs.MyGameCode.GDscoreObjects1.length = k;}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects1);
gdjs.copyArray(runtimeScene.getObjects("text2"), gdjs.MyGameCode.GDtext2Objects1);
{for(var i = 0, len = gdjs.MyGameCode.GDMindaObjects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDMindaObjects1[i].setColor("28;33;248");
}
}{for(var i = 0, len = gdjs.MyGameCode.GDtext2Objects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDtext2Objects1[i].hide(false);
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Predio2"), gdjs.MyGameCode.GDPredio2Objects1);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDPredio2Objects1Objects, gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects, false, runtimeScene, false);
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDPredio2Objects1 */
{for(var i = 0, len = gdjs.MyGameCode.GDPredio2Objects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDPredio2Objects1[i].setColor("208;2;27");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Minda"), gdjs.MyGameCode.GDMindaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Predio2"), gdjs.MyGameCode.GDPredio2Objects1);

gdjs.MyGameCode.condition0IsTrue_0.val = false;
{
gdjs.MyGameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDPredio2Objects1Objects, gdjs.MyGameCode.mapOfGDgdjs_46MyGameCode_46GDMindaObjects1Objects, true, runtimeScene, false);
}if (gdjs.MyGameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MyGameCode.GDPredio2Objects1 */
{for(var i = 0, len = gdjs.MyGameCode.GDPredio2Objects1.length ;i < len;++i) {
    gdjs.MyGameCode.GDPredio2Objects1[i].setColor("255;255;255");
}
}}

}


{


{
}

}


{


{
}

}


};

gdjs.MyGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MyGameCode.GDNewObject5Objects1.length = 0;
gdjs.MyGameCode.GDNewObject5Objects2.length = 0;
gdjs.MyGameCode.GDNewObject5Objects3.length = 0;
gdjs.MyGameCode.GDMindaObjects1.length = 0;
gdjs.MyGameCode.GDMindaObjects2.length = 0;
gdjs.MyGameCode.GDMindaObjects3.length = 0;
gdjs.MyGameCode.GDTilebgObjects1.length = 0;
gdjs.MyGameCode.GDTilebgObjects2.length = 0;
gdjs.MyGameCode.GDTilebgObjects3.length = 0;
gdjs.MyGameCode.GDAvatarObjects1.length = 0;
gdjs.MyGameCode.GDAvatarObjects2.length = 0;
gdjs.MyGameCode.GDAvatarObjects3.length = 0;
gdjs.MyGameCode.GDObstacleObjects1.length = 0;
gdjs.MyGameCode.GDObstacleObjects2.length = 0;
gdjs.MyGameCode.GDObstacleObjects3.length = 0;
gdjs.MyGameCode.GDNewObjectObjects1.length = 0;
gdjs.MyGameCode.GDNewObjectObjects2.length = 0;
gdjs.MyGameCode.GDNewObjectObjects3.length = 0;
gdjs.MyGameCode.GDNewObject2Objects1.length = 0;
gdjs.MyGameCode.GDNewObject2Objects2.length = 0;
gdjs.MyGameCode.GDNewObject2Objects3.length = 0;
gdjs.MyGameCode.GDNewObject3Objects1.length = 0;
gdjs.MyGameCode.GDNewObject3Objects2.length = 0;
gdjs.MyGameCode.GDNewObject3Objects3.length = 0;
gdjs.MyGameCode.GDNewObject4Objects1.length = 0;
gdjs.MyGameCode.GDNewObject4Objects2.length = 0;
gdjs.MyGameCode.GDNewObject4Objects3.length = 0;
gdjs.MyGameCode.GDtextObjects1.length = 0;
gdjs.MyGameCode.GDtextObjects2.length = 0;
gdjs.MyGameCode.GDtextObjects3.length = 0;
gdjs.MyGameCode.GDPedraObjects1.length = 0;
gdjs.MyGameCode.GDPedraObjects2.length = 0;
gdjs.MyGameCode.GDPedraObjects3.length = 0;
gdjs.MyGameCode.GDPredio2Objects1.length = 0;
gdjs.MyGameCode.GDPredio2Objects2.length = 0;
gdjs.MyGameCode.GDPredio2Objects3.length = 0;
gdjs.MyGameCode.GDitemObjects1.length = 0;
gdjs.MyGameCode.GDitemObjects2.length = 0;
gdjs.MyGameCode.GDitemObjects3.length = 0;
gdjs.MyGameCode.GDitem_95hudObjects1.length = 0;
gdjs.MyGameCode.GDitem_95hudObjects2.length = 0;
gdjs.MyGameCode.GDitem_95hudObjects3.length = 0;
gdjs.MyGameCode.GDscoreObjects1.length = 0;
gdjs.MyGameCode.GDscoreObjects2.length = 0;
gdjs.MyGameCode.GDscoreObjects3.length = 0;
gdjs.MyGameCode.GDtext2Objects1.length = 0;
gdjs.MyGameCode.GDtext2Objects2.length = 0;
gdjs.MyGameCode.GDtext2Objects3.length = 0;

gdjs.MyGameCode.eventsList4(runtimeScene);
return;

}

gdjs['MyGameCode'] = gdjs.MyGameCode;
