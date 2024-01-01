interface InstructionType {
    id: number;
    title: string;
    description: string;
}

interface IngredientType {
    id: number,
    name: string;
    num: string;
    checked?: Boolean;
}
export type IngredientList = {
    id: number;
    title: string;
    items: IngredientType[];
}
interface ToolType {
    description: string;
    id: number;
}

export interface RecipeType {
    id: string;
    title: string;
    image: string;
    subtitle: {
        time: string;
        numOfUsers: string;
    };
    instruction: InstructionType[];
    ingredient: IngredientList[];
    tool: ToolType[];
}

const recipeList: RecipeType[] = [
    {
        id: "0",
        title: "Lẩu thập cẩm",
        image: "https://s3-alpha-sig.figma.com/img/f7ec/5d1c/4aa5122ec75397b7fd678f89bdcc24a1?Expires=1704672000&Signature=fFuTwgdtMYr1HkvKP21yO13tKFJgeUc4np~pWSI0qsy~BQXl7nXjv8WaVSe-z1Pbvj25MGZGb7HQeiJ9Yzl4IDurLAKdFGTtrcZ26FnzsZCAi6Xn8g92IyOV9QadE8V85Z6LrduvMMC7kpj-ZDnJ4Ux8im62iFb70bHtrn6up5WKa6KpA3VClZGN-Sv0W5JcryPBoj~OfZn1y2YkOKunLxXDOsxCLyPFsV8HDTmkTaIDmslKinYvmh~5jxWA5210unEtaNA6wiwKIqljBrQHjY4gC6OUbxQlnTkKXDwyPCkQAwY3AuK~ZZbiuHTYBWvW6YEEee4WR64jNIJ~NL7BpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        subtitle: {
            time: "30 phút",
            numOfUsers: "4 người",
        },
        instruction: [
            {
                id: 1,
                title: "Bước 1",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 2,
                title: "Bước 2",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 3,
                title: "Bước 3",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 4,
                title: "Bước 4",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },

        ],
        ingredient : [
            {
                id: 1,
                title: "Gia vị tạo mùi",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                        checked: true,
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp",
                        checked: true,
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }
                ]
            },
            {
                id: 2,
                title: "Gia vị nêm",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp"
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }
                ]
            }

        ],
        tool: [
            {
                id: 1,
                description: "Nồi Lẩu",
            },
            {
                id: 2,
                description: "Bếp Đun Nước",
            },
            {
                id: 3,
                description: "Đồ Chảo hoặc Nồi Nhỏ",
            },
            {
                id: 4,
                description: "Đĩa hoặc Khay",
            },
            {
                id: 5,
                description: "Dụng Cụ Nạo, Băm",
            },
            {
                id: 6,
                description: "Đũa và Nĩa Ăn",
            },
            {
                id: 7,
                description: "Nồi Lẩu Điện hoặc Bếp Cồn",
            },
            {
                id: 8,
                description: "Thớt và Dao Bếp",
            },
        ]
    },
    {
        id: "1",
        title: "Lẩu Thái Yum Yum",
        image: "https://s3-alpha-sig.figma.com/img/f7ec/5d1c/4aa5122ec75397b7fd678f89bdcc24a1?Expires=1704672000&Signature=fFuTwgdtMYr1HkvKP21yO13tKFJgeUc4np~pWSI0qsy~BQXl7nXjv8WaVSe-z1Pbvj25MGZGb7HQeiJ9Yzl4IDurLAKdFGTtrcZ26FnzsZCAi6Xn8g92IyOV9QadE8V85Z6LrduvMMC7kpj-ZDnJ4Ux8im62iFb70bHtrn6up5WKa6KpA3VClZGN-Sv0W5JcryPBoj~OfZn1y2YkOKunLxXDOsxCLyPFsV8HDTmkTaIDmslKinYvmh~5jxWA5210unEtaNA6wiwKIqljBrQHjY4gC6OUbxQlnTkKXDwyPCkQAwY3AuK~ZZbiuHTYBWvW6YEEee4WR64jNIJ~NL7BpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        subtitle: {
            time: "30 phút",
            numOfUsers: "4 người",
        },
        instruction: [
            {
                id: 1,
                title: "Bước 1",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 2,
                title: "Bước 2",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 3,
                title: "Bước 3",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 4,
                title: "Bước 4",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },

        ],
        ingredient : [
            {
                id: 1,
                title: "Gia vị tạo mùi",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                        checked: true,
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp",
                        checked: true,
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            },
            {
                id: 2,
                title: "Gia vị nêm",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp"
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            }

        ],
        tool: [
            {
                id: 1,
                description: "Một bếp ga",
            },
            {
                id: 2,
                description: "Một nồi lớn",
            }
        ]
    },
    {
        id: "2",
        title: "Lẩu gà lá giang",
        image: "https://s3-alpha-sig.figma.com/img/f7ec/5d1c/4aa5122ec75397b7fd678f89bdcc24a1?Expires=1704672000&Signature=fFuTwgdtMYr1HkvKP21yO13tKFJgeUc4np~pWSI0qsy~BQXl7nXjv8WaVSe-z1Pbvj25MGZGb7HQeiJ9Yzl4IDurLAKdFGTtrcZ26FnzsZCAi6Xn8g92IyOV9QadE8V85Z6LrduvMMC7kpj-ZDnJ4Ux8im62iFb70bHtrn6up5WKa6KpA3VClZGN-Sv0W5JcryPBoj~OfZn1y2YkOKunLxXDOsxCLyPFsV8HDTmkTaIDmslKinYvmh~5jxWA5210unEtaNA6wiwKIqljBrQHjY4gC6OUbxQlnTkKXDwyPCkQAwY3AuK~ZZbiuHTYBWvW6YEEee4WR64jNIJ~NL7BpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        subtitle: {
            time: "30 phút",
            numOfUsers: "4 người",
        },
        instruction: [
            {
                id: 1,
                title: "Bước 1",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 2,
                title: "Bước 2",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
        ],
        ingredient : [
            {
                id: 1,
                title: "Gia vị tạo mùi",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                        checked: true,
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp",
                        checked: true,
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            },
            {
                id: 2,
                title: "Gia vị nêm",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp"
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            }

        ],
        tool: [
            {
                id: 1,
                description: "Một bếp ga",
            },
            {
                id: 2,
                description: "Một nồi lớn",
            }
        ]
    },
    {
        id: "3",
        title: "Lẩu cua ớt hiểm",
        image: "https://s3-alpha-sig.figma.com/img/f7ec/5d1c/4aa5122ec75397b7fd678f89bdcc24a1?Expires=1704672000&Signature=fFuTwgdtMYr1HkvKP21yO13tKFJgeUc4np~pWSI0qsy~BQXl7nXjv8WaVSe-z1Pbvj25MGZGb7HQeiJ9Yzl4IDurLAKdFGTtrcZ26FnzsZCAi6Xn8g92IyOV9QadE8V85Z6LrduvMMC7kpj-ZDnJ4Ux8im62iFb70bHtrn6up5WKa6KpA3VClZGN-Sv0W5JcryPBoj~OfZn1y2YkOKunLxXDOsxCLyPFsV8HDTmkTaIDmslKinYvmh~5jxWA5210unEtaNA6wiwKIqljBrQHjY4gC6OUbxQlnTkKXDwyPCkQAwY3AuK~ZZbiuHTYBWvW6YEEee4WR64jNIJ~NL7BpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        subtitle: {
            time: "30 phút",
            numOfUsers: "4 người",
        },
        instruction: [
            {
                id: 1,
                title: "Bước 1",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 2,
                title: "Bước 2",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
        ],
        ingredient : [
            {
                id: 1,
                title: "Gia vị tạo mùi",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                        checked: true,
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp",
                        checked: true,
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            },
            {
                id: 2,
                title: "Gia vị nêm",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp"
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            }

        ],
        tool: [
            {
                id: 1,
                description: "Một bếp ga",
            },
            {
                id: 2,
                description: "Một nồi lớn",
            }
        ]
    },
    {
        id: "4",
        title: "Lẩu mắm",
        image: "https://s3-alpha-sig.figma.com/img/f7ec/5d1c/4aa5122ec75397b7fd678f89bdcc24a1?Expires=1704672000&Signature=fFuTwgdtMYr1HkvKP21yO13tKFJgeUc4np~pWSI0qsy~BQXl7nXjv8WaVSe-z1Pbvj25MGZGb7HQeiJ9Yzl4IDurLAKdFGTtrcZ26FnzsZCAi6Xn8g92IyOV9QadE8V85Z6LrduvMMC7kpj-ZDnJ4Ux8im62iFb70bHtrn6up5WKa6KpA3VClZGN-Sv0W5JcryPBoj~OfZn1y2YkOKunLxXDOsxCLyPFsV8HDTmkTaIDmslKinYvmh~5jxWA5210unEtaNA6wiwKIqljBrQHjY4gC6OUbxQlnTkKXDwyPCkQAwY3AuK~ZZbiuHTYBWvW6YEEee4WR64jNIJ~NL7BpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        subtitle: {
            time: "30 phút",
            numOfUsers: "4 người",
        },
        instruction: [
            {
                id: 1,
                title: "Bước 1",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 2,
                title: "Bước 2",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
        ],
        ingredient : [
            {
                id: 1,
                title: "Gia vị tạo mùi",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                        checked: true,
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp",
                        checked: true,
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            },
            {
                id: 2,
                title: "Gia vị nêm",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp"
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            }

        ],
        tool: [
            {
                id: 1,
                description: "Một bếp ga",
            },
            {
                id: 2,
                description: "Một nồi lớn",
            }
        ]
    },
    {
        id: "5",
        title: "Lẩu gà chanh ớt",
        image: "https://s3-alpha-sig.figma.com/img/f7ec/5d1c/4aa5122ec75397b7fd678f89bdcc24a1?Expires=1704672000&Signature=fFuTwgdtMYr1HkvKP21yO13tKFJgeUc4np~pWSI0qsy~BQXl7nXjv8WaVSe-z1Pbvj25MGZGb7HQeiJ9Yzl4IDurLAKdFGTtrcZ26FnzsZCAi6Xn8g92IyOV9QadE8V85Z6LrduvMMC7kpj-ZDnJ4Ux8im62iFb70bHtrn6up5WKa6KpA3VClZGN-Sv0W5JcryPBoj~OfZn1y2YkOKunLxXDOsxCLyPFsV8HDTmkTaIDmslKinYvmh~5jxWA5210unEtaNA6wiwKIqljBrQHjY4gC6OUbxQlnTkKXDwyPCkQAwY3AuK~ZZbiuHTYBWvW6YEEee4WR64jNIJ~NL7BpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        subtitle: {
            time: "30 phút",
            numOfUsers: "4 người",
        },
        instruction: [
            {
                id: 1,
                title: "Bước 1",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 2,
                title: "Bước 2",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
        ],
        ingredient : [
            {
                id: 1,
                title: "Gia vị tạo mùi",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                        checked: true,
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp",
                        checked: true,
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            },
            {
                id: 2,
                title: "Gia vị nêm",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp"
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            }

        ],
        tool: [
            {
                id: 1,
                description: "Một bếp ga",
            },
            {
                id: 2,
                description: "Một nồi lớn",
            }
        ]
    },
    {
        id: "6",
        title: "Lẩu cá đuối",
        image: "https://s3-alpha-sig.figma.com/img/f7ec/5d1c/4aa5122ec75397b7fd678f89bdcc24a1?Expires=1704672000&Signature=fFuTwgdtMYr1HkvKP21yO13tKFJgeUc4np~pWSI0qsy~BQXl7nXjv8WaVSe-z1Pbvj25MGZGb7HQeiJ9Yzl4IDurLAKdFGTtrcZ26FnzsZCAi6Xn8g92IyOV9QadE8V85Z6LrduvMMC7kpj-ZDnJ4Ux8im62iFb70bHtrn6up5WKa6KpA3VClZGN-Sv0W5JcryPBoj~OfZn1y2YkOKunLxXDOsxCLyPFsV8HDTmkTaIDmslKinYvmh~5jxWA5210unEtaNA6wiwKIqljBrQHjY4gC6OUbxQlnTkKXDwyPCkQAwY3AuK~ZZbiuHTYBWvW6YEEee4WR64jNIJ~NL7BpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        subtitle: {
            time: "30 phút",
            numOfUsers: "4 người",
        },
        instruction: [
            {
                id: 1,
                title: "Bước 1",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 2,
                title: "Bước 2",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
        ],
        ingredient : [
            {
                id: 1,
                title: "Gia vị tạo mùi",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                        checked: true,
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp",
                        checked: true,
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            },
            {
                id: 2,
                title: "Gia vị nêm",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp"
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            }

        ],
        tool: [
            {
                id: 1,
                description: "Một bếp ga",
            },
            {
                id: 2,
                description: "Một nồi lớn",
            }
        ]
    },
    {
        id: "7",
        title: "Lẩu riêu cua đồng",
        image: "https://s3-alpha-sig.figma.com/img/f7ec/5d1c/4aa5122ec75397b7fd678f89bdcc24a1?Expires=1704672000&Signature=fFuTwgdtMYr1HkvKP21yO13tKFJgeUc4np~pWSI0qsy~BQXl7nXjv8WaVSe-z1Pbvj25MGZGb7HQeiJ9Yzl4IDurLAKdFGTtrcZ26FnzsZCAi6Xn8g92IyOV9QadE8V85Z6LrduvMMC7kpj-ZDnJ4Ux8im62iFb70bHtrn6up5WKa6KpA3VClZGN-Sv0W5JcryPBoj~OfZn1y2YkOKunLxXDOsxCLyPFsV8HDTmkTaIDmslKinYvmh~5jxWA5210unEtaNA6wiwKIqljBrQHjY4gC6OUbxQlnTkKXDwyPCkQAwY3AuK~ZZbiuHTYBWvW6YEEee4WR64jNIJ~NL7BpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        subtitle: {
            time: "30 phút",
            numOfUsers: "4 người",
        },
        instruction: [
            {
                id: 1,
                title: "Bước 1",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 2,
                title: "Bước 2",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
        ],
        ingredient : [
            {
                id: 1,
                title: "Gia vị tạo mùi",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                        checked: true,
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp",
                        checked: true,
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            },
            {
                id: 2,
                title: "Gia vị nêm",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp"
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            }

        ],
        tool: [
            {
                id: 1,
                description: "Một bếp ga",
            },
            {
                id: 2,
                description: "Một nồi lớn",
            }
        ]
    },
    {
        id: "8",
        title: "Lẩu thả",
        image: "https://s3-alpha-sig.figma.com/img/f7ec/5d1c/4aa5122ec75397b7fd678f89bdcc24a1?Expires=1704672000&Signature=fFuTwgdtMYr1HkvKP21yO13tKFJgeUc4np~pWSI0qsy~BQXl7nXjv8WaVSe-z1Pbvj25MGZGb7HQeiJ9Yzl4IDurLAKdFGTtrcZ26FnzsZCAi6Xn8g92IyOV9QadE8V85Z6LrduvMMC7kpj-ZDnJ4Ux8im62iFb70bHtrn6up5WKa6KpA3VClZGN-Sv0W5JcryPBoj~OfZn1y2YkOKunLxXDOsxCLyPFsV8HDTmkTaIDmslKinYvmh~5jxWA5210unEtaNA6wiwKIqljBrQHjY4gC6OUbxQlnTkKXDwyPCkQAwY3AuK~ZZbiuHTYBWvW6YEEee4WR64jNIJ~NL7BpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        subtitle: {
            time: "30 phút",
            numOfUsers: "4 người",
        },
        instruction: [
            {
                id: 1,
                title: "Bước 1",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 2,
                title: "Bước 2",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
        ],
        ingredient : [
            {
                id: 1,
                title: "Gia vị tạo mùi",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                        checked: true,
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp",
                        checked: true,
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            },
            {
                id: 2,
                title: "Gia vị nêm",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp"
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            }

        ],
        tool: [
            {
                id: 1,
                description: "Một bếp ga",
            },
            {
                id: 2,
                description: "Một nồi lớn",
            }
        ]
    },
    {
        id: "9",
        title: "Lẩu bò",
        image: "https://s3-alpha-sig.figma.com/img/f7ec/5d1c/4aa5122ec75397b7fd678f89bdcc24a1?Expires=1704672000&Signature=fFuTwgdtMYr1HkvKP21yO13tKFJgeUc4np~pWSI0qsy~BQXl7nXjv8WaVSe-z1Pbvj25MGZGb7HQeiJ9Yzl4IDurLAKdFGTtrcZ26FnzsZCAi6Xn8g92IyOV9QadE8V85Z6LrduvMMC7kpj-ZDnJ4Ux8im62iFb70bHtrn6up5WKa6KpA3VClZGN-Sv0W5JcryPBoj~OfZn1y2YkOKunLxXDOsxCLyPFsV8HDTmkTaIDmslKinYvmh~5jxWA5210unEtaNA6wiwKIqljBrQHjY4gC6OUbxQlnTkKXDwyPCkQAwY3AuK~ZZbiuHTYBWvW6YEEee4WR64jNIJ~NL7BpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        subtitle: {
            time: "30 phút",
            numOfUsers: "4 người",
        },
        instruction: [
            {
                id: 1,
                title: "Bước 1",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
            {
                id: 2,
                title: "Bước 2",
                description: "Cá mú bóp muối rửa sạch, cắt khúc vừa ăn. Măng rửa qua, ngâm nước 30 phút để loại bỏ chất độc, xả lại nhiều lần, để ráo. Cà chua cắt múi cau một nửa, còn lại cắt hạt lựu nhỏ. Bò viên cắt vừa ăn nếu là loại lớn",
            },
        ],
        ingredient : [
            {
                id: 1,
                title: "Gia vị tạo mùi",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                        checked: true,
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp",
                        checked: true,
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            },
            {
                id: 2,
                title: "Gia vị nêm",
                items: [
                    {
                        id: 1,
                        name: "Gia vị lẩu thái",
                        num: "1 gói",
                    },
                    {
                        id: 2,
                        name: "Lá chanh",
                        num: "1 tsp"
                    },
                    {
                        id: 3,
                        name: "Bột me",
                        num: "1 tbsp",
                    },
                    {
                        id: 4,
                        name: "Sả băm",
                        num: "1 tbsp",
                    }

                ]
            }

        ],
        tool: [
            {
                id: 1,
                description: "Một bếp ga",
            },
            {
                id: 2,
                description: "Một nồi lớn",
            }
        ]
    },
]


export default recipeList