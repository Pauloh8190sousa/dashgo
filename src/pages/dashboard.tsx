import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import dynamic from "next/dynamic";
import { Sidebar } from "../components/Sidebar";


const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axisTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            "2021-08-06T16:11:00.000Z",
            "2021-08-07T16:11:00.000Z",
            "2021-08-08T16:11:00.000Z",
            "2021-08-09T16:11:00.000Z",
            "2021-08-10T16:11:00.000Z",
            "2021-08-11T16:11:00.000Z",
            "2021-08-12T16:11:00.000Z",
            "2021-08-13T16:11:00.000Z",
        ],
    },
    fill: {
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shade: "dark",
            opacityFrom: 0.7,
            opacityTo: 0.3,
        },
    }
};

const series = [
    { name: "series1", data: [12, 44, 10, 130, 240, 58, 80, 147] }
];

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh" >
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start" >
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160}/>
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}