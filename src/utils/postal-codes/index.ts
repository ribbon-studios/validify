export enum Countries {
  AD = 'AD',
  AI = 'AI',
  AO = 'AO',
  AQ = 'AQ',
  AX = 'AX',
  AZ = 'AZ',
  BB = 'BB',
  BH = 'BH',
  BL = 'BL',
  BN = 'BN',
  CA = 'CA',
  DK = 'DK',
  FK = 'FK',
  GB = 'GB',
  GF = 'GF',
  GG = 'GG',
  GI = 'GI',
  GP = 'GP',
  GS = 'GS',
  HN = 'HN',
  IE = 'IE',
  IM = 'IM',
  IO = 'IO',
  JE = 'JE',
  KY = 'KY',
  LB = 'LB',
  LC = 'LC',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  MC = 'MC',
  MD = 'MD',
  MF = 'MF',
  MS = 'MS',
  MT = 'MT',
  NC = 'NC',
  NL = 'NL',
  PF = 'PF',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PT = 'PT',
  RE = 'RE',
  RU = 'RU',
  SH = 'SH',
  SM = 'SM',
  SO = 'SO',
  SZ = 'SZ',
  TC = 'TC',
  TW = 'TW',
  US = 'US',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  WF = 'WF',
  WS = 'WS',
}

type RegExpDetails = {
  regex: RegExp;
  redundantCharacters?: string;
};

const COUNTRY_TO_DETAILS: {
  [key in Countries]: RegExp | RegExpDetails | null;
} = {
  [Countries.AD]: /^AD[0-9]{3}$/i,
  [Countries.AI]: /^AI-?2640$/i,
  [Countries.AO]: null,
  [Countries.AQ]: /^BIQQ1ZZ$/i,
  [Countries.AX]: /^(AX)?[0-9]{5}$/i,
  [Countries.AZ]: /^AZ[0-9]{4}$/i,
  [Countries.BB]: /^(BB)?[0-9]{5}$/i,
  [Countries.BH]: /^[0-9]{3,4}$/i,
  [Countries.BL]: /^97133$/i,
  [Countries.BN]: /^[a-zA-Z]{2}[0-9]{4}$/i,
  [Countries.CA]: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  [Countries.DK]: /^(DK){0,1}\d{4}$/i,
  [Countries.FK]: /^FIQQ1ZZ$/i,
  // https://www.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf
  [Countries.GB]:
    /((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})|GIR0AA/i,
  [Countries.GF]: /^973[0-9]{2}$/i,
  [Countries.GG]: /^GY[0-9]{2,3}[A-Za-z]{2}$/i,
  [Countries.GI]: /^GX111AA$/i,
  [Countries.GP]: /^971[0-9]{2}$/i,
  [Countries.GS]: /^SIQQ1ZZ$/i,
  [Countries.HN]: /^(HN)?[0-9]{5}$/i,
  [Countries.IE]: {
    regex: /^[AaC-Fc-fHhKkNnPpRrTtV-Yv-y]\d[0-9Ww][ -]?[0-9AaC-Fc-fHhKkNnPpRrTtV-Yv-y]{4}$/i,
  },
  [Countries.IM]: /^IM[0-9]{2,3}[A-Za-z]{2}$/i,
  [Countries.IO]: /^BBND1ZZ$/i,
  [Countries.JE]: /^JE[0-9]{2,3}[A-Za-z]{2}$/i,
  [Countries.KY]: /^KY[0-9]{5}$/i,
  [Countries.LB]: /^[0-9]{4}(?:[0-9]{4})?$/i,
  [Countries.LC]: /^LC[0-9]{5}$/i,
  [Countries.LT]: /^(LT)?[0-9]{5}$/i,
  [Countries.LU]: /^(L){0,1}\d{4}$/i,
  [Countries.LV]: /^(LV)?[0-9]{4}$/i,
  [Countries.MC]: /^980[0-9]{2}$/i,
  [Countries.MD]: /^(MD)?[0-9]{4}$/i,
  [Countries.MF]: /^97150$/i,
  [Countries.MS]: /^(MSR)?[0-9]{4}$/i,
  [Countries.MT]: /^[A-Z]{3}[0-9]{4}$/i,
  [Countries.NC]: /^988[0-9]{2}$/i,
  [Countries.NL]: /^[1-9][0-9]{3}(?!SA|SD|SS)[A-Z]{2}$/i,
  [Countries.PF]: /^987[0-9]{2}$/i,
  [Countries.PL]: {
    regex: /^[0-9]{2}-[0-9]{3}$/i,
    redundantCharacters: ' ',
  },
  [Countries.PM]: /^97500$/i,
  [Countries.PN]: /^PCRN1ZZ$/i,
  [Countries.PT]: {
    regex: /^[0-9]{4}-[0-9]{3}$/i,
    redundantCharacters: ' ',
  },
  [Countries.RE]: /^974[0-9]{2}$/i,
  [Countries.RU]: /^[0-9]{3}([0-9]{3})?$/i,
  [Countries.SH]: /^STHL1ZZ$/i,
  [Countries.SM]: /^4789[0-9]{1}$/i,
  [Countries.SO]: /^[a-zA-Z]{2}[0-9]{5}$/i,
  [Countries.SZ]: /^[a-zA-Z]{1}[0-9]{3}$/i,
  [Countries.TC]: /^TKCA1ZZ$/i,
  [Countries.TW]: /^[0-9]{3}([0-9]{2})?$/i,
  [Countries.US]: /^[0-9]{5}([0-9]{4})?$/i,
  [Countries.VA]: /^00120$/i,
  [Countries.VC]: /^(VC)?[0-9]{4}$/i,
  [Countries.VE]: /^[0-9]{4}[a-zA-Z]?$/i,
  [Countries.VG]: /^(VG)?[0-9]{4}$/i,
  [Countries.WF]: /^986[0-9]{2}$/i,
  [Countries.WS]: /^(WS)?[0-9]{4}$/i,
};

export function isValidPostalCode(country: Countries, rawPostalCode: string): boolean {
  const rawDetails = COUNTRY_TO_DETAILS[country];

  // If the country/region does not use postal codes
  if (rawDetails === null) {
    return true;
  }

  const details: RegExpDetails =
    rawDetails instanceof RegExp
      ? {
          regex: rawDetails,
          redundantCharacters: ' -',
        }
      : rawDetails;

  const postalCode = details.redundantCharacters
    ? rawPostalCode.trim().replace(new RegExp(`[${details.redundantCharacters}]`, 'g'), '')
    : rawPostalCode.trim();

  return details.regex.test(postalCode);
}

export function isInvalidPostalCode(country: Countries, rawPostalCode: string): boolean {
  return !isValidPostalCode(country, rawPostalCode);
}
