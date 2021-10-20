export interface IConfigurations {
    DepartmentCodes: IDepartmentCode[];
    LetterCodes:     ILetterCode[];
    EnvelopCodes:    IEnvelopCode[];
    MediaCodes:      IMediaCode[];
}

export interface IDepartmentCode {
    DepartmentCode?: string;
    CC?:             string;
    SubjectTP?:      string;
    BCC?:            string;
    SubjectControl?: string;
    To?:             string;
    From?:           string;
}

export interface IEnvelopCode {
    Type?:          string;
    Description?:   string;
    MaxCountPages?: string;
    EnvelopCode?:   string;
    Weight?:        string;
}

export interface ILetterCode {
    LetterCode?: string;
    PostCode?:   string;
}

export interface IMediaCode {
    Description?:        string;
    XvalueWindow?:       string;
    YvalueWindow?:       string;
    ExtraTextPositionY?: string;
    ExtraTextPositionX?: string;
    YvalueLetter?:       string;
    CodeOnFront?:        string;
    XvalueLetter?:       string;
    MediaCode?:          string;
    Weight?:             string;
}
