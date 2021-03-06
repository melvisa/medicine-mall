package cn.jdcloud.medicine.mall.api.biz.sign.vo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel("积分对象")
public class SignVo {
	@ApiModelProperty("总签到天数")
	private int totalSign;
	@ApiModelProperty("连续签到第一天")
	private int continuityDay;
	@ApiModelProperty("当天是否可再签到")
	private  int currentDaySignTag;
}
