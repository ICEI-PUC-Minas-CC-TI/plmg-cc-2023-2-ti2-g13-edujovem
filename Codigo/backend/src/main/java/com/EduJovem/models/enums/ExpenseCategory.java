package com.EduJovem.models.enums;

public enum ExpenseCategory {
    GULOSEIMAS(1),
    TRANSPORTE(2),
    EDUCAÇÃO(3),
    ROUPAS(4),
    JOGOS(5),
    EXTRA(6);

    private int code;

    private ExpenseCategory(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    public static ExpenseCategory valueOf(int code) {
        for(ExpenseCategory value : ExpenseCategory.values()){
            if(value.getCode() == code){
                return value;
            }
        }
        throw new IllegalArgumentException("Invalid ExpenseCategory code");
    }

}
