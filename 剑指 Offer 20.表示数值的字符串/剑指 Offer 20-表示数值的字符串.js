//״̬
var STATE = {
    Sblanck: 'Sblanck',//��ʼ�Ŀո�
    Sign: 'Sign',//����λ
    Integer: 'Integer',//��������
    PointInteger: 'PointInteger',//С���㣨����������
    PointOnly: 'PointOnly',//С���㣨����������
    Decimal: 'Decimal',//С������
    E: 'E',//�ַ�e��E
    ESign: 'ESign',//ָ������
    EInteger: 'EInteger',//ָ������
    Eblank: 'Eblank'//ĩβ�ո�
}
// ת���ַ���
var STR = {
    number:'number',//����
    point: 'point',//С����
    spack:'spack',//�ո�
    e: 'e',//�ַ�e
    sign: 'sign'//+-��
}
// ת�ƹ���
var TRRULE = {
    Sblanck:{
        number: 'Integer',
        point: 'PointOnly',
        spack: 'Sblanck',
        sign: 'Sign'
    },
    Sign:{
        number: 'Integer',
        point:'PointOnly'
    },
    Integer:{
        number:'Integer',
        point:'PointInteger',
        e:'E',
        spack:'Eblank'
    },
    PointInteger:{
        number:'Decimal',
        spack:'Eblank',
        e:'E'
    },
    PointOnly:{
        number:'Decimal',
    },
    Decimal:{
        number:'Decimal',
        spack:'Eblank',
        e:'E'
    },
    E:{
        number:'EInteger',
        sign: 'ESign'
    },
    ESign:{
        number:'EInteger',
    },
    EInteger:{
        number:'EInteger',
        spack:'Eblank'
    },
    Eblank:{
        spack:'Eblank'
    }
}

function strJudge(str){
    if(str<='9'&&str>='0') return 'number';
    if(str==='.') return 'point';
    if(str===' ') return 'spack'
    if(str==='e'||str==='E') return 'e';
    if(str==='+'||str==='-') return 'sign';
    return null;
}


var isNumber = function(s) {
    let state = STATE.Sblanck, str;
    for(let i=0;i<s.length;i++){
        str = strJudge(s[i]);
        if(str===null) return false;
        state = TRRULE[state][str];
        if(state===undefined) return false;
    }
    if(state===STATE.Integer||state===STATE.PointInteger||state===STATE.Decimal||state===STATE.EInteger||state===STATE.Eblank) return true;
    return false;
};