import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  UnstyledButton,
  Overlay,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';
import { UnstyledButtonModule } from '../../components/UnstyledButton/UnstyledButton'
import { FaqSimple } from '../../components/FQASimple/FaqSimple';
const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));


  return (
    <>
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Liên hệ</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Để lại email của bạn và chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Tên"
              placeholder="Cute Cute"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Ghi chú"
              placeholder="Tôi muốn được phục vụ tốt hơn"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button className={classes.control}>Gửi tin nhắn</Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
      <div className={classes.wrapperButtonModule}>
        <UnstyledButtonModule />
      </div>
      <div>
        <FaqSimple />
      </div>
    </>
  );
}