import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button, Card, Checkbox, Input, cn } from "@nextui-org/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AddPropertyInputType } from "./AddPropertyForm";
import BlockTitle from "@/app/components/blockTitle";

interface Props {
    title: string;
    next: () => void;
    prev: () => void;
    className?: string;
}
const Features = (props: Props) => {
    const {
        register,
        formState: { errors },
        control,
        trigger,
        getValues,
    } = useFormContext<AddPropertyInputType>();
    const handleNext = async () => {
        if (
            await trigger([
                "propertyFeature.area",
                "propertyFeature.bathrooms",
                "propertyFeature.bedrooms",
                "propertyFeature.parkingSpots",
            ])
        )
            props.next();
    };
    return (
        <Card className={cn("p-2  grid grid-cols-1 md:grid-cols-2 gap-3", props.className)}>
            <BlockTitle title={props.title} className="md:col-span-2"/>
            <Input
                {...register("propertyFeature.bedrooms")}
                errorMessage={errors.propertyFeature?.bedrooms?.message}
                isInvalid={!!errors.propertyFeature?.bedrooms}
                label="Bedrooms"
                defaultValue={getValues().propertyFeature?.bedrooms?.toString() || ""}
            />

            <Input
                {...register("propertyFeature.bathrooms")}
                errorMessage={errors.propertyFeature?.bathrooms?.message}
                isInvalid={!!errors.propertyFeature?.bathrooms}
                label="Bathrooms"
                defaultValue={getValues().propertyFeature?.bathrooms?.toString() || ""}
            />
            <Input
                {...register("propertyFeature.parkingSpots")}
                errorMessage={errors.propertyFeature?.parkingSpots?.message}
                isInvalid={!!errors.propertyFeature?.parkingSpots}
                label="Parking Spots"
                defaultValue={getValues().propertyFeature?.parkingSpots?.toString() || ""}
            />

            <Input
                {...register("propertyFeature.area")}
                errorMessage={errors.propertyFeature?.area?.message}
                isInvalid={!!errors.propertyFeature?.area}
                label="Area"
                defaultValue={getValues().propertyFeature?.area?.toString() || ""}
            />
            <div className="flex items-center justify-between ">
                <Controller
                    control={control}
                    name="propertyFeature.hasSwimmingPool"
                    render={({field}) => (
                        <Checkbox
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            isSelected={!!getValues().propertyFeature?.hasSwimmingPool}
                            // defaultValue={getValues("propertyFeature.hasSwimmingPool") ? "true" : "false"}
                        >
                            Has Swimming Pool
                        </Checkbox>
                    )}
                />

                <Controller
                    control={control}
                    name="propertyFeature.hasGardenYard"
                    render={({field}) => (
                        <Checkbox
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            isSelected={!!getValues().propertyFeature?.hasGardenYard}
                            // defaultValue={getValues("propertyFeature.hasGardenYard") ? "true" : "false"}
                        >
                            Has Gard/Yard
                        </Checkbox>
                    )}
                />

                <Controller
                    control={control}
                    name="propertyFeature.hasBalcony"
                    render={({field}) => (
                        <Checkbox
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            // defaultValue={getValues().propertyFeature.hasBalcony ? "true" : "false"}
                            isSelected={!!getValues().propertyFeature?.hasBalcony}
                        >
                            Has Balcony/Patio
                        </Checkbox>
                    )}
                />
            </div>
            <div className="flex justify-between col-span-2 gap-2 mt-5">
                <Button
                    onClick={props.prev}
                    startContent={<ChevronLeftIcon className="w-6"/>}
                    color="primary" className="w-40">Previous</Button>
                <Button
                    onClick={handleNext}
                    endContent={<ChevronRightIcon className="w-6"/>}
                    color="primary" className="w-40">Next</Button>
            </div>
        </Card>
    );
};

export default Features;