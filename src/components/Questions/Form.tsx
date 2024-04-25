'use client'
import {
    FlexProps,
    Flex,
} from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Section } from "../Section";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormControl, TextareaAutosize, Input, Checkbox, Stack, Radio, RadioGroup, FormControlLabel, Button, CircularProgress, TextField, Typography } from '@mui/material';
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ALCO_OPTIONS = [
    "Красное вино (полусухое)",
    "Красное вино (полусладкое)",
    "Белое вино (полусухое)",
    "Белое вино (полусладкое)",
    "Вино игристое",
    "Водка",
    "Коньяк",
    "Не употребляю",
];

// const FOOD_OPTIONS = [
//     "Всеяден",
//     "Не ем мясо",
//     "Не ем рыбу",
//     "Вегетарианец"
// ];

export const Form = ({
    ...flexProps
}: {
    flexProps?: FlexProps & { id: string };
}) => {

    const [isSending, setIsSending] = useState(false);

    const methods = useForm({
        defaultValues: {
            name: "",
            visit: "Да",
            transfer: "Нет",
            alco: [],
            food: [],
            additional: "",
        },
    });

    const onSubmit = (data: any) => {
        if (isSending) {
            return;
        }
        setIsSending(true);

        emailjs
            .send("service_nl6md1c", "template_43lywr5", data, {
                publicKey: "WXgX7Y7wPOKvJHkND",
            })
            .then((resp) => {
                toast.success("Ответ записан");
                methods.reset();
                setIsSending(false);
            })
            .catch((resp) => {
                setIsSending(false);
                toast.error("Ошибка отправки. Попробуйте позже");
            });
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} id="formId">
                <Section flexProps={{ ...flexProps, width: "100%", maxW: "100%", id: '' }}>
                    <Typography variant="h5" style={{ color: 'black' }}>Анкета гостя/гостей</Typography>
                    <Flex flexDirection="column" w="100%" gap={3}>
                        <FormControl>
                            <Input required
                                {...methods.register("name")}
                                placeholder="Михал Палыч Терентьев и Клава Кока"
                            />
                        </FormControl>
                        <FormControl required>
                            <Typography variant="h6" style={{ color: 'black' }}>
                                Присутствие
                            </Typography>
                            <Controller
                                name="visit"
                                control={methods.control}
                                render={({ field: { onChange, value } }) => (
                                    <RadioGroup onChange={onChange} value={value}>
                                        <FormControlLabel value="Один" required sx={{
                                            '& .MuiFormControlLabel-asterisk': {
                                                display: 'none',
                                            },
                                        }} control={<Radio />} label="Один" />
                                        <FormControlLabel value="Парой" control={<Radio />} label="Парой" />
                                    </RadioGroup>
                                )}
                            />
                        </FormControl>
                        <FormControl>
                            <Typography variant="h6" style={{ color: 'black' }}>
                                Предпочтения по алкоголю
                            </Typography>
                            <Stack direction="column" gap={0}>
                                {ALCO_OPTIONS.map((type) => (
                                    <div key={type}>
                                        <Checkbox
                                            {...methods.register("alco")}
                                            value={type}
                                        />
                                        <label style={{ color: 'black' }}>{type}</label>
                                    </div>
                                ))}
                            </Stack>
                        </FormControl>
                        {/* <FormControl>
                            <Stack direction="column" gap={0}>
                                {FOOD_OPTIONS.map((type) => (
                                    <Checkbox
                                        {...methods.register("food")}
                                        value={type}
                                    >
                                        {type}
                                    </Checkbox>
                                ))}
                            </Stack>
                        </FormControl> */}
                        <FormControl>
                            <Typography variant="h6" style={{ color: 'black' }}>
                                Дополнительные пожелания (опционально)
                            </Typography>
                            <TextField
                                multiline
                                rows={4}
                                placeholder="Приду со своей едой, питьем и в добром расположении духа"
                                InputProps={{
                                    style: {
                                        resize: 'none',
                                    },
                                }}
                            />
                        </FormControl>
                        <Button type="submit" variant="contained" fullWidth disabled={isSending}>
                            {isSending ? <CircularProgress size={24} /> : "Отправить"}
                        </Button>
                        <ToastContainer />
                    </Flex>
                </Section>
            </form>
        </FormProvider>
    );
};
