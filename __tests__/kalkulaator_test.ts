import {Calculator} from "../kalkulaator";

let calcobj:Calculator=null;

beforeEach(() => {
    calcobj=new Calculator();
});

test('empty init', () => {
    expect(calcobj.getPanelContents()).toBe("");
});