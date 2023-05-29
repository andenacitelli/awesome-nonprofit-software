import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconAlignJustified,
  IconChevronsUpRight,
  IconCurrencyDollar,
} from "@tabler/icons-react";
import { ReactNode } from "react";

import { Product } from "../../data/types";

const BulletPoint = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <Group spacing={"xs"}>
      <Box sx={{ maxWidth: "50px" }}>{icon}</Box>
      <Box sx={{ maxWidth: "calc(100% - 50px)" }}>
        <Text fz={"sm"}>{text}</Text>
      </Box>
    </Group>
  );
};
export const ProductEmbedded = ({ product }: { product: Product }) => {
  return (
    <Card padding={"sm"}>
      <Stack spacing={"xs"}>
        <Group spacing={"xs"}>
          <Image
            src={product.logoUrl}
            width={40}
            alt={product.name + " Logo"}
          />
          <Title order={4}>{product.name}</Title>
        </Group>

        <BulletPoint icon={<IconAlignJustified />} text={product.blurb} />
        <BulletPoint icon={<IconCurrencyDollar />} text={product.pricing} />

        <Group position={"apart"}>
          <Anchor href={product.url} target={"_blank"}>
            <Button size="xs" variant={"outline"}>
              <Group spacing={"5px"}>
                <Text>Learn More</Text>
                <IconChevronsUpRight />
              </Group>
            </Button>
          </Anchor>
          <Group spacing={"xs"}>
            {product.categories.map((category) => (
              <Badge key={category}>{category}</Badge>
            ))}
          </Group>
        </Group>
      </Stack>
    </Card>
  );
};
