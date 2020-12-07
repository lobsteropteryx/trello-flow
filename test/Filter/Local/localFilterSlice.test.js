import reducer from '../../../app/Filter/Local/localFilterSlice';
import {
    setCards,
    setColumns,
    setStartColumn,
    setEndColumn
} from '../../../app/Filter/Local/localFilterSlice';

describe("Setting columns", () => {
    it("sets the list of columns", () => {
        const state = {};
        const columns = [{name: "a list"}];
        const expectedState = {columns};
        const action = setColumns(columns);
        expect(reducer(state, action)).toEqual(expectedState);
    });
});

describe("Setting cards", () => {
    it("sets the list of cards", () => {
        const state = {};
        const cards = [{name: "an action"}];
        const expectedState = {cards};
        const action = setCards(cards);
        expect(reducer(state, action)).toEqual(expectedState);
    });
});

describe("Selecting columns", () => {
    it("Sets the selected start column", () => {
        const state = {};
        const selectedColumn = {id: 1, name: 'selectedColumn'};
        const expectedState = {startColumn: {id: 1, name: 'selectedColumn'}};
        const action = setStartColumn(selectedColumn);
        expect(reducer(state, action)).toEqual(expectedState);
    });

    it("Sets the selected end column", () => {
        const state = {};
        const selectedColumn = {id: 1, name: 'selectedColumn'};
        const expectedState = {endColumn: {id: 1, name: 'selectedColumn'}};
        const action = setEndColumn(selectedColumn);
        expect(reducer(state, action)).toEqual(expectedState);
    });
});
