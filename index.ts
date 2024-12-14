import { conferences } from "./types"
import { PrismaClient } from "@prisma/client"
import * as fs from 'fs';
const prisma = new PrismaClient()
const getAllConfernces = async () : Promise<any[]> => {
    const allConferences = await prisma.conferences.findMany(
        {
            include : {
                conference_rank_footprints : {
                    include : {
                        source_ranks : {
                            include : {
                                sources : true,
                            }
                        },
                        for_group : {
                            select : {
                                code : true, 
                                name : true
                            }
                        }
                
                    }
                },
                call_for_papers : {
                    include : {
                        important_dates : true
                    }
                }
            },
            where : {
                acronym : "ICITA"
            }
        }
    )
    let json = JSON.stringify(allConferences)
    fs.writeFileSync('conferences.json', json)
    return allConferences;
}

getAllConfernces() ;