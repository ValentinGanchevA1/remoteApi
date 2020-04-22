import Color from "./Color";

const ParagraphType = {
    ERROR: 'ERROR',
    INFO: 'INFO',
    WARN: 'WARN',
    CONSOLE: 'CONSOLE',
    getColor: (c) => {
        switch (c) {
            case ParagraphType.WARN:
                return Color.WARN;
            case ParagraphType.INFO:
                return Color.INFO;
            case ParagraphType.ERROR:
                return Color.ERROR;
            default:
                return Color.CONSOLE;
        }
    }
};

export default ParagraphType;