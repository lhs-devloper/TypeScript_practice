import React from "react";

export interface ICubeResultDTO {
    value: string;
    grade: string;
  } 
  
export interface IHistory{
    id: string;
    character_name: string;
    create_date: string;
    item_equip_part: string;
    cube_type: string;
    item_level: number;
    target_item: string;
    before_potential_options: ICubeResultDTO[];
    after_potential_options: ICubeResultDTO[];
}
