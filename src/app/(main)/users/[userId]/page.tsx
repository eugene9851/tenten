import NoList from '@/src/components/applyList/NoList';
import MyProfile from '@/src/components/myProfile/MyProfile';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import getProfileData from '@/src/api/getProfileData';
import styles from './page.module.scss';

interface MyPageProps {
  params: {
    [param: string]: string;
  };
}

async function mypage({ params }: MyPageProps) {
  const { userId } = params;

  const result = await getProfileData(userId);
  const { name, phone, address, bio } = result;
  const listNum = 1;

  return name !== 'string' ? (
    <NoList
      title='내 프로필'
      description='내 프로필을 등록하고 원하는 가게에 지원해 보세요.'
      text='내 프로필 등록하기'
    />
  ) : (
    <>
      <div className={styles.section}>
        <div className={styles.title}>내 프로필</div>
        <div className={styles.profileBox}>
          <MyProfile name={name} phone={phone} address={address} bio={bio} />
        </div>
      </div>
      {listNum ? (
        <div className={styles.backgroundArea}>
          <div className={styles.applyArea}>
            <div className={styles.title}>신청 내역</div>
            <ApplyTable />
          </div>
        </div>
      ) : (
        <NoList
          title='신청 내역'
          description='아직 신청 내역이 없어요.'
          text='공고 보러가기'
        />
      )}
    </>
  );
}

export default mypage;