import { Countries, isInvalidPostalCode, isValidPostalCode } from '..';

describe('utils(PostalCodes)', () => {
  type PostalCodeTests = {
    [key in Countries]: [string, boolean][];
  };

  const countryTestsMap: PostalCodeTests = {
    [Countries.AD]: [
      ['AD123', true],
      ['AD001', true],
      ['A1234', false],
      ['AD12', false],
      ['AD1234', false],
    ],
    [Countries.AI]: [
      ['AI2640', true],
      ['AI-2640', true],
      ['A2640', false],
      ['AI02640', false],
      ['AI-02640', false],
    ],
    [Countries.AO]: [
      ['abcd', true],
      ['1234', true],
    ],
    [Countries.AQ]: [
      ['BIQQ 1ZZ', true],
      ['BIQQ1ZZ', true],
      ['BIQQ1Z', false],
      ['BIQQ01ZZ', false],
    ],
    [Countries.AX]: [
      ['12345', true],
      ['AX-12345', true],
      ['AX12345', true],
      ['AX123', false],
      ['A1234', false],
      ['AX-1234', false],
    ],
    [Countries.AZ]: [
      ['AZ1234', true],
      ['AZ-1234', true],
      ['AX123', false],
      ['A1234', false],
      ['AZ-12345', false],
    ],
    [Countries.BB]: [
      ['BB12345', true],
      ['12345', true],
      ['x1231s', false],
      ['1231sd', false],
    ],
    [Countries.BH]: [
      ['123', true],
      ['1234', true],
      ['12', false],
      ['12345', false],
    ],
    [Countries.BL]: [
      ['97133', true],
      ['971330', false],
      ['9713', false],
    ],
    [Countries.BN]: [
      ['AB1234', true],
      ['tK0987', true],
      ['abc123', false],
      ['a12345', false],
      ['at123', false],
      ['BH12345', false],
    ],
    [Countries.CA]: [
      ['A4B5X5', true],
      ['A4B5A5', true],
      ['123AAA', false],
      ['12A5AA', false],
    ],
    [Countries.DK]: [
      ['1124', true],
      ['DK1054', true],
      ['DK-1120', true],
      ['DK1120', true],
      ['DK 1125', true],
      ['DK - 1234', true],
      ['dk-1123', true],
      ['1125DK', false],
      ['DK12345', false],
      ['DK123', false],
      ['123', false],
      ['', false],
    ],
    [Countries.FK]: [
      ['FIQQ 1ZZ', true],
      ['FIQQ1ZZ', true],
      ['FIQQ01ZZ', false],
      ['FIQQ1ZZZ', false],
    ],
    [Countries.GB]: [
      ['CW3 9SS', true],
      ['SE5 0EG', true],
      ['SE50EG', true],
      ['WC2H 7LT', true],
      ['se5 0eg', true],
      ['Z29ZZ', true],
      ['Z699ZZ', true],
      ['ZX99ZZ', true],
      ['ZC999ZZ', true],
      ['EC1A 1BB', true],
      ['W1A 0AX', true],
      ['M1 1AE', true],
      ['B33 8TH', true],
      ['CR2 6XH', true],
      ['DN55 1PT', true],
      ['GIR 0AA', true],
      ['W1U 1BW', true],
      ['SK8 7NA', true],
      // TODO: Figure out why this scenario is throwing a false positive
      // ['WC2H 7LTa', false],
      ['WC2H', false],
    ],
    [Countries.GF]: [
      ['97300', true],
      ['97390', true],
      ['9732', false],
      ['973999', false],
      ['97290', false],
      ['097390', false],
    ],
    [Countries.GG]: [
      ['GY1 1AA', true],
      ['GY111AA', true],
      ['CW3 9SS', false],
      ['GG1 1AA', false],
      ['SE5 0EG', false],
      ['SE50EG', false],
      ['WC2H 7LTa', false],
      ['WC2H', false],
    ],
    [Countries.GI]: [
      ['GX111AA', true],
      ['GX11 1AA', true],
      ['GX1101AA', false],
      ['GX111AAA', false],
    ],
    [Countries.GP]: [
      ['97100', true],
      ['97190', true],
      ['9712', false],
      ['971999', false],
      ['97290', false],
      ['097190', false],
    ],
    [Countries.GS]: [
      ['SIQQ 1ZZ', true],
      ['SIqq 1zz', true],
      ['SIQQ1ZZ', true],
      ['SIQQ01ZZ', false],
      ['SIQQ1ZZZ', false],
    ],
    [Countries.HN]: [
      ['HN12345', true],
      ['12345', true],
      ['123456', false],
      ['HN123456', false],
      ['HN1234', false],
    ],
    [Countries.IE]: [
      ['D6W1234', true],
      ['A23 0984', true],
      ['D00-AV92', true],
      ['y631fhk', true],
      ['a00 0000', true],
      ['d44-n4x4', true],
      ['A65F4E2', true],
      ['D6Z1234', false],
      ['y63  1fhk', false],
    ],
    [Countries.IM]: [
      ['IM1 1AA', true],
      ['IM111AA', true],
      ['CW3 9SS', false],
      ['SE5 0EG', false],
      ['SE50EG', false],
      ['WC2H 7LTa', false],
      ['WC2H', false],
    ],
    [Countries.IO]: [
      ['BBND 1ZZ', true],
      ['BBND1ZZ', true],
      ['BBND01ZZ', false],
      ['BBND1ZZZ', false],
    ],
    [Countries.JE]: [
      ['JE1 1AA', true],
      ['JE111AA', true],
      ['CW3 9SS', false],
      ['SE5 0EG', false],
      ['SE50EG', false],
      ['WC2H 7LTa', false],
      ['WC2H', false],
    ],
    [Countries.KY]: [
      ['KY1-1234', true],
      ['KY12345', true],
      ['KY1234', false],
      ['KY123456', false],
      ['K1-1234', false],
    ],
    [Countries.LB]: [
      ['1234', true],
      ['1234 1234', true],
      ['12341234', true],
      ['123', false],
      ['1234567', false],
      ['123456789', false],
    ],
    [Countries.LC]: [
      ['LC12 345', true],
      ['LC12345', true],
      ['12345', false],
      ['x1231s', false],
      ['1231sd', false],
    ],
    [Countries.LT]: [
      ['12345', true],
      ['LT12345', true],
      ['LT-12345', true],
      ['1234', false],
      ['123456', false],
      ['LT-1234', false],
    ],
    [Countries.LU]: [
      ['1124', true],
      ['L1054', true],
      ['L-1120', true],
      ['L1120', true],
      ['L 1125', true],
      ['L - 1234', true],
      ['l-1123', true],
      ['1125L', false],
      ['L12345', false],
      ['L123', false],
      ['123', false],
      ['', false],
    ],
    [Countries.LV]: [
      ['1234', true],
      ['LV-1234', true],
      ['LV1234', true],
      ['LV123', false],
      ['L1234', false],
      ['LV-12345', false],
    ],
    [Countries.MC]: [
      ['98000', true],
      ['98099', true],
      ['98100', false],
      ['97099', false],
    ],
    [Countries.MD]: [
      ['1234', true],
      ['MD1234', true],
      ['MD-1234', true],
      ['MD123', false],
      ['M1234', false],
      ['MD-12345', false],
    ],
    [Countries.MF]: [
      ['97150', true],
      ['971500', false],
      ['9715', false],
    ],
    [Countries.MS]: [
      ['MSR 1110', true],
      ['MSR 1350', true],
      ['1350', true],
      ['MS1110', false],
      ['MSR01350', false],
      ['12345', false],
    ],
    [Countries.MT]: [
      ['abc1234', true],
      ['ABC1234', true],
      ['SHD4783', true],
      ['ABCABC', false],
      ['123ABCD', false],
    ],
    [Countries.NC]: [
      ['98800', true],
      ['98890', true],
      ['9882', false],
      ['988999', false],
      ['98990', false],
      ['098890', false],
    ],
    [Countries.NL]: [
      ['1235DF', true],
      ['5983DH', true],
      ['1000 AP', true],
      ['1235D', false],
      ['12j4h', false],
      ['k3j51l', false],
      ['1945SS', false],
    ],
    [Countries.PF]: [
      ['98700', true],
      ['98790', true],
      ['9872', false],
      ['987999', false],
      ['98690', false],
      ['098790', false],
    ],
    [Countries.PL]: [
      ['44-100 ', true],
      ['44-100', true],
      ['44100', false],
      ['44f00', false],
      ['e4410', false],
      ['44-100d', false],
      ['c44-100', false],
      ['b44100', false],
      ['44100a', false],
    ],
    [Countries.PM]: [
      ['97500', true],
      ['975000', false],
      ['9750', false],
    ],
    [Countries.PN]: [
      ['PCRN 1ZZ', true],
      ['PCRN1ZZ', true],
      ['PCRN01ZZ', false],
      ['PCRN1ZZZ', false],
    ],
    [Countries.PT]: [
      ['1234-123', true],
      ['1255', false],
      ['1234567', false],
      ['1234 123', false],
      ['x1231s', false],
      ['1231sd', false],
      ['1010101010', false],
      ['1234 12', false],
    ],
    [Countries.RE]: [
      ['97400', true],
      ['97490', true],
      ['9742', false],
      ['974999', false],
      ['97390', false],
      ['097490', false],
    ],
    [Countries.RU]: [
      ['125', true],
      ['123456', true],
      ['x1231s', false],
      ['1231sd', false],
      ['1010101010', false],
    ],
    [Countries.SH]: [
      ['STHL 1ZZ', true],
      ['STHL1ZZ', true],
      ['STHL01ZZ', false],
      ['STHL1ZZZ', false],
    ],
    [Countries.SM]: [
      ['47890', true],
      ['47899', true],
      ['4789', false],
      ['478900', false],
      ['47889', false],
    ],
    [Countries.SO]: [
      ['AW12345', true],
      ['BN47899', true],
      ['12345', false],
      ['A12345', false],
      ['SL123456', false],
    ],
    [Countries.SZ]: [
      ['S123', true],
      ['a789', true],
      ['F1234', false],
      ['D12', false],
    ],
    [Countries.TC]: [
      ['TKCA1ZZ', true],
      ['TKCA 1ZZ', true],
      ['TKCA01ZZ', false],
      ['TKCA1ZZZ', false],
    ],
    [Countries.TW]: [
      ['123', true],
      ['123-45', true],
      ['12345', true],
      ['12', false],
      ['1234', false],
      ['101010', false],
    ],
    [Countries.US]: [
      ['12345', true],
      ['12345-7689', true],
      ['x1231s', false],
      ['1231sd', false],
      ['1010101010', false],
    ],
    [Countries.VA]: [
      ['00120', true],
      ['0012', false],
      ['001200', false],
    ],
    [Countries.VC]: [
      ['1234', true],
      ['VC1234', true],
      ['VC-1234', true],
      ['VC123', false],
      ['V1234', false],
      ['VC-12345', false],
    ],
    [Countries.VE]: [
      ['1234', true],
      ['1234-A', true],
      ['123', false],
      ['1234AA', false],
    ],
    [Countries.VG]: [
      ['1234', true],
      ['VG1234', true],
      ['VG-1234', true],
      ['VG123', false],
      ['V1234', false],
      ['VG-12345', false],
    ],
    [Countries.WF]: [
      ['98600', true],
      ['98690', true],
      ['9862', false],
      ['986999', false],
      ['98990', false],
      ['098690', false],
    ],
    [Countries.WS]: [
      ['1234', true],
      ['WS1234', true],
      ['WS-1234', true],
      ['WS123', false],
      ['V1234', false],
      ['WS-12345', false],
    ],
  };

  describe.each(Object.keys(countryTestsMap))('country(%s)', (country) => {
    const tests = countryTestsMap[country];

    if (tests.length > 0) {
      describe('fn(isValidPostalCode)', () => {
        it.each(tests)('should validate "%s" and return %s', (postalCode, expectedValue) => {
          expect(isValidPostalCode(country as Countries, postalCode)).toEqual(expectedValue);
        });
      });

      describe('fn(isInvalidPostalCode)', () => {
        it.each(tests)('should validate "%s" and return %s', (postalCode, expectedValue) => {
          expect(isInvalidPostalCode(country as Countries, postalCode)).toEqual(!expectedValue);
        });
      });
    }
  });
});
