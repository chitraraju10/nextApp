import { useRouter } from 'next/router';
import { useGetBlogsQuery } from '@/store/apis';

function CompletePost() {
    const {query} = useRouter()
    const { data: viewReportData } = useGetBlogsQuery();

    const BlogData = viewReportData?.filter((p) => p?.id == query.id)

  	return (
		<div className="m-auto prose p-10">
			<div>
				<h1 className="text-[28px] font-semibold">
					{BlogData[0]?.title}
				</h1>
                <p>{BlogData[0]?.description}</p>
			</div>
		</div>
	);
}

export default CompletePost;






