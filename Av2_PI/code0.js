gdjs.MenuSceneCode = {};
gdjs.MenuSceneCode.GDNewObject5Objects1= [];
gdjs.MenuSceneCode.GDNewObject5Objects2= [];
gdjs.MenuSceneCode.GDNewObject5Objects3= [];
gdjs.MenuSceneCode.GDStartButtonObjects1= [];
gdjs.MenuSceneCode.GDStartButtonObjects2= [];
gdjs.MenuSceneCode.GDStartButtonObjects3= [];
gdjs.MenuSceneCode.GDExitButtonObjects1= [];
gdjs.MenuSceneCode.GDExitButtonObjects2= [];
gdjs.MenuSceneCode.GDExitButtonObjects3= [];
gdjs.MenuSceneCode.GDStartTextObjects1= [];
gdjs.MenuSceneCode.GDStartTextObjects2= [];
gdjs.MenuSceneCode.GDStartTextObjects3= [];
gdjs.MenuSceneCode.GDExitTextObjects1= [];
gdjs.MenuSceneCode.GDExitTextObjects2= [];
gdjs.MenuSceneCode.GDExitTextObjects3= [];
gdjs.MenuSceneCode.GDLogoObjects1= [];
gdjs.MenuSceneCode.GDLogoObjects2= [];
gdjs.MenuSceneCode.GDLogoObjects3= [];
gdjs.MenuSceneCode.GDTituloObjects1= [];
gdjs.MenuSceneCode.GDTituloObjects2= [];
gdjs.MenuSceneCode.GDTituloObjects3= [];
gdjs.MenuSceneCode.GDbackgroundObjects1= [];
gdjs.MenuSceneCode.GDbackgroundObjects2= [];
gdjs.MenuSceneCode.GDbackgroundObjects3= [];

gdjs.MenuSceneCode.conditionTrue_0 = {val:false};
gdjs.MenuSceneCode.condition0IsTrue_0 = {val:false};
gdjs.MenuSceneCode.condition1IsTrue_0 = {val:false};


gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MenuSceneCode.GDStartButtonObjects1});gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MenuSceneCode.GDStartButtonObjects1});gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.MenuSceneCode.GDExitButtonObjects1});gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.MenuSceneCode.GDExitButtonObjects1});gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.MenuSceneCode.GDStartButtonObjects2});gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.MenuSceneCode.GDExitButtonObjects1});gdjs.MenuSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuSceneCode.GDStartButtonObjects2);

gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDStartButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MyGame", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.MenuSceneCode.GDExitButtonObjects1);

gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.MenuSceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.MenuSceneCode.GDExitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.MenuSceneCode.GDExitTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.MenuSceneCode.GDLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuSceneCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MenuSceneCode.GDStartTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Titulo"), gdjs.MenuSceneCode.GDTituloObjects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.MenuSceneCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDStartButtonObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2));
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDExitButtonObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2));
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDStartTextObjects1[i].setX(((( gdjs.MenuSceneCode.GDStartButtonObjects1.length === 0 ) ? 0 :gdjs.MenuSceneCode.GDStartButtonObjects1[0].getPointX("")) - ((gdjs.MenuSceneCode.GDStartTextObjects1[i].getWidth()) / 2)));
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDExitTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDExitTextObjects1[i].setX(((( gdjs.MenuSceneCode.GDExitButtonObjects1.length === 0 ) ? 0 :gdjs.MenuSceneCode.GDExitButtonObjects1[0].getPointX("")) - ((( gdjs.MenuSceneCode.GDStartTextObjects1.length === 0 ) ? 0 :gdjs.MenuSceneCode.GDStartTextObjects1[0].getWidth()) / 2)));
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDStartTextObjects1[i].setY(((( gdjs.MenuSceneCode.GDStartButtonObjects1.length === 0 ) ? 0 :gdjs.MenuSceneCode.GDStartButtonObjects1[0].getPointY("")) - ((gdjs.MenuSceneCode.GDStartTextObjects1[i].getHeight()) / 2)));
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDExitTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDExitTextObjects1[i].setY(((( gdjs.MenuSceneCode.GDExitButtonObjects1.length === 0 ) ? 0 :gdjs.MenuSceneCode.GDExitButtonObjects1[0].getPointY("")) - ((gdjs.MenuSceneCode.GDExitTextObjects1[i].getHeight()) / 2)));
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDLogoObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - (gdjs.MenuSceneCode.GDLogoObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDTituloObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDTituloObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - (gdjs.MenuSceneCode.GDTituloObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDbackgroundObjects1[i].setZOrder(0.8);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuSceneCode.GDStartButtonObjects1);

gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDStartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuSceneCode.GDStartButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MenuSceneCode.GDStartTextObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDStartButtonObjects1[i].setScale(1);
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDStartTextObjects1[i].setCharacterSize(30);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuSceneCode.GDStartButtonObjects1);

gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuSceneCode.GDStartButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MenuSceneCode.GDStartTextObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDStartButtonObjects1[i].setScale(0.9);
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDStartTextObjects1[i].setCharacterSize(28);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.MenuSceneCode.GDExitButtonObjects1);

gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuSceneCode.GDExitButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.MenuSceneCode.GDExitTextObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDExitButtonObjects1[i].setScale(0.9);
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDExitTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDExitTextObjects1[i].setCharacterSize(28);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.MenuSceneCode.GDExitButtonObjects1);

gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuSceneCode.mapOfGDgdjs_46MenuSceneCode_46GDExitButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuSceneCode.GDExitButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ExitText"), gdjs.MenuSceneCode.GDExitTextObjects1);
{for(var i = 0, len = gdjs.MenuSceneCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDExitButtonObjects1[i].setScale(1);
}
}{for(var i = 0, len = gdjs.MenuSceneCode.GDExitTextObjects1.length ;i < len;++i) {
    gdjs.MenuSceneCode.GDExitTextObjects1[i].setCharacterSize(30);
}
}}

}


{


gdjs.MenuSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MenuSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuSceneCode.GDNewObject5Objects1.length = 0;
gdjs.MenuSceneCode.GDNewObject5Objects2.length = 0;
gdjs.MenuSceneCode.GDNewObject5Objects3.length = 0;
gdjs.MenuSceneCode.GDStartButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDStartButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDStartButtonObjects3.length = 0;
gdjs.MenuSceneCode.GDExitButtonObjects1.length = 0;
gdjs.MenuSceneCode.GDExitButtonObjects2.length = 0;
gdjs.MenuSceneCode.GDExitButtonObjects3.length = 0;
gdjs.MenuSceneCode.GDStartTextObjects1.length = 0;
gdjs.MenuSceneCode.GDStartTextObjects2.length = 0;
gdjs.MenuSceneCode.GDStartTextObjects3.length = 0;
gdjs.MenuSceneCode.GDExitTextObjects1.length = 0;
gdjs.MenuSceneCode.GDExitTextObjects2.length = 0;
gdjs.MenuSceneCode.GDExitTextObjects3.length = 0;
gdjs.MenuSceneCode.GDLogoObjects1.length = 0;
gdjs.MenuSceneCode.GDLogoObjects2.length = 0;
gdjs.MenuSceneCode.GDLogoObjects3.length = 0;
gdjs.MenuSceneCode.GDTituloObjects1.length = 0;
gdjs.MenuSceneCode.GDTituloObjects2.length = 0;
gdjs.MenuSceneCode.GDTituloObjects3.length = 0;
gdjs.MenuSceneCode.GDbackgroundObjects1.length = 0;
gdjs.MenuSceneCode.GDbackgroundObjects2.length = 0;
gdjs.MenuSceneCode.GDbackgroundObjects3.length = 0;

gdjs.MenuSceneCode.eventsList1(runtimeScene);
return;

}

gdjs['MenuSceneCode'] = gdjs.MenuSceneCode;
