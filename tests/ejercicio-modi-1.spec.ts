import { describe, it, expect, vi } from 'vitest';
import { NumericPrintableCollection } from '../src/ejercicio-modi-1/numericPrintableCollection'
import { StringPrintableCollection} from '../src/ejercicio-modi-1/stringPrintableCollection'

describe('NumericPrintableCollection', () => {
  let numPrCl: NumericPrintableCollection = new NumericPrintableCollection([4, 7]);
  let numPrCl2: NumericPrintableCollection = new NumericPrintableCollection();

  it ('a numeric printable collection constructor should initialize values', () => {
    expect(numPrCl.print()).toEqual('4, 7');
    expect(numPrCl2.print()).toEqual('');
  })

  it ('a numeric printable collection should add items', () => {
    numPrCl.addItem(1);
    numPrCl.addItem(2);
    numPrCl.addItem(3);
    numPrCl.addItem(5)
    expect(numPrCl.print()).toEqual('4, 7, 1, 2, 3, 5');
  })

  it ('a numeric printable collection should delete items', () => {
    numPrCl.removeItem(5);
    numPrCl.removeItem(2);
    expect(numPrCl.print()).toEqual('4, 7, 1, 3');
  })

  it ('a numeric printable collection should get items', () => {
    expect(numPrCl.getItem(1)).toBe(1);
    expect(numPrCl.getItem(6)).toBeUndefined;
  })

  it ('a numeric printable collection should get the number of items', () => {
    expect(numPrCl.getNumberOfItems()).toEqual(4);
  })

  it ('a numeric printable collection call certain functions', () => {
    const spy = vi.spyOn(numPrCl, 'addItem');
    numPrCl.addItem(3)
    expect(spy).toHaveBeenCalledWith(3);
  })
})

describe('StringPrintableCollection', () => {
  let strPrCl: StringPrintableCollection = new StringPrintableCollection();
  let strPrCl2: StringPrintableCollection = new StringPrintableCollection(['adios', 'nunca']);

  it('a string printable colection should initialize correctly items', () => {
    expect(strPrCl.print()).toEqual('');
    expect(strPrCl2.print()).toEqual('adios,nunca')
  })

  it ('a string printable collection should add items', () => {
    strPrCl.addItem('hola');
    strPrCl.addItem('mundo');
    strPrCl.addItem('soy');
    strPrCl.addItem('pepe')
    expect(strPrCl.print()).toEqual('hola,mundo,soy,pepe');
  })

  it ('a string printable collection should delete items', () => {
    strPrCl.removeItem('pepe');
    strPrCl.removeItem('mundo');
    expect(strPrCl.print()).toEqual('hola,soy');
  })

  it ('a string printable collection should get items', () => {
    expect(strPrCl.getItem('hola')).toBe('hola');
    expect(strPrCl.getItem('pepe')).toBeUndefined
  })

  it ('a string printable collection should get the number of items', () => {
    expect(strPrCl.getNumberOfItems()).toEqual(2);
  })

  it ('a string printable collection call certain functions', () => {
    const spy = vi.spyOn(strPrCl, 'addItem');
    strPrCl.addItem('adios')
    expect(spy).toHaveBeenCalledWith('adios');
  })
})